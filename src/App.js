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

// api
import { fetchData, sendData, deleteData } from './API';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorsAndTypes: [],
    };

    this.handleAddColor = this.handleAddColor.bind(this);
    this.handleRemoveColor = this.handleRemoveColor.bind(this);
  }


  async componentDidMount() {
    const response = await fetchData();
    this.setState({ colorsAndTypes: response });
  };

  handleAddColor = (type, color) => {
    // if (isCorrectColorName(color)) {
    let colorBody = { type: type, color: color };

    sendData(colorBody);

    if (type && color) {
      this.setState({ colorsAndTypes: [...this.state.colorsAndTypes, colorBody] });
    };
    // } else {
    // console.log(`Color "${color}" is incorrect`);
    // }
  };

  handleRemoveColor = color => {
    let onlyColors = this.state.colorsAndTypes.map(colorAndType => colorAndType.color); // filter only colors
    // let setColorsAndTypesCopy = this.state.colorsAndTypes;
    let index = onlyColors.indexOf(color);

    if (index !== -1) {
      // setColorsAndTypesCopy.splice(index, 1);
      this.setState((prev => {
        let deletedColorAndType = prev.colorsAndTypes.splice(index, 1)[0];

        deleteData(deletedColorAndType);
        return { colorsAndTypes: [...prev.colorsAndTypes] };
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
          <Board userId="000000" colorsAndTypes={this.state.colorsAndTypes} onRemoveColor={this.handleRemoveColor} />
        </div>
      </Router >
    );
  }
}

export default App;
