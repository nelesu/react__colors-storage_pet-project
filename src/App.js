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

function App() {
  const [colors, setColors] = useState([{ type: 'hex', color: "#00010a" }, { type: 'hex', color: "#0d1016" }, { type: 'hex', color: "#15547e" }]);
  const handleAddColor = (type, color) => {
    // if (isCorrectColorName(color)) {
    if (type && color) {
      setColors([...colors, { type: type, color: color }]);
    };

    // } else {
    // console.log(`Color "${color}" is incorrect`);
    // }
  };

  const handleRemoveColor = color => {
    let colorsCopy = [...colors];
    let index = colorsCopy.indexOf(color);
    if (index !== -1) {
      colorsCopy.splice(index, 1);
      setColors(colorsCopy);
    }
  }

  return (
    <Router>
      <div className="container">
        <Route path="/add/:id" render={(props) => (
          <AddColor {...props} onAddColor={handleAddColor} />
        )} />
        <Board userId="000000" colors={colors} onRemoveColor={handleRemoveColor} />
      </div>
    </Router>
  );
}
export default App;
