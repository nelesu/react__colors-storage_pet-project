import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
// components
import Board from './components/Board/board.component';
import AddColor from './components/AddColor/add-color.component';

// utils
import isCorrectColorName from './utils/isCorrectColorName';
import uuid from './utils/uuid';

// api
import { fetchData, sendData, deleteColorBody } from './API';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorsBody: [],
    };

    this.handleAddColor = this.handleAddColor.bind(this);
    this.handleRemoveColor = this.handleRemoveColor.bind(this);
  }


  async componentDidMount() {
    const response = await fetchData();
    this.setState({ colorsBody: response });
  };

  handleAddColor = (type, color) => {
    // if (isCorrectColorName(color)) {
    let colorBody = { type: type, color: color, id: uuid() };

    sendData(colorBody);

    if (type && color) {
      this.setState({ colorsBody: [...this.state.colorsBody, colorBody] });
    };
    // } else {
    // console.log(`Color "${color}" is incorrect`);
    // }
  };

  handleRemoveColor = id => {
    let colorsBodyIds = this.state.colorsBody.map(colorBody => colorBody.id); // filter only colors
    // let setColorsAndTypesCopy = this.state.colorsBody;
    let indexOfColorBody = colorsBodyIds.indexOf(id); // check the color is on the board

    if (indexOfColorBody !== -1) {
      // setColorsAndTypesCopy.splice(index, 1);
      this.setState((state => {
        let deletedColorBody = state.colorsBody.splice(indexOfColorBody, 1)[0];

        deleteColorBody(deletedColorBody);
        return { colorsBody: [...state.colorsBody] };
      }));
    }
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/add/:id" render={(props) => (
            <AddColor {...props} onAddColor={this.handleAddColor} />
          )} />
          <Board userId="000000" colorsBody={this.state.colorsBody} onRemoveColor={this.handleRemoveColor} />
        </div>
      </Router >
    );
  }
}

export default App;
