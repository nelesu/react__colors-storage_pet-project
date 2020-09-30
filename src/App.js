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
  const [colorsAndTypes, setColorsAndTypes] = useState([{ type: 'hex', color: "#00010a" }, { type: 'hex', color: "#0d1016" }, { type: 'hex', color: "#15547e" }, { type: 'hex', color: "#00010a" }, { type: 'hex', color: "#0d1016" }, { type: 'hex', color: "#00010a" }, { type: 'hex', color: "#0d1016" }, { type: 'hex', color: "#00010a" }, { type: 'hex', color: "#0d1016" }, { type: 'hex', color: "#00010a" }, { type: 'hex', color: "#0d1016" },]);
  const handleAddColor = (type, color) => {
    // if (isCorrectColorName(color)) {
    if (type && color) {
      setColorsAndTypes([...colorsAndTypes, { type: type, color: color }]);
    };
    // } else {
    // console.log(`Color "${color}" is incorrect`);
    // }
  };

  const handleRemoveColor = color => {
    let onlyColors = colorsAndTypes.map(colorAndType => colorAndType.color);
    let setColorsAndTypesCopy = colorsAndTypes;
    let index = onlyColors.indexOf(color);
    if (index !== -1) {
      // setColorsAndTypesCopy.splice(index, 1);
      // debugger;
      setColorsAndTypes(prev => {
        prev.splice(index, 1);
        return [...prev];
      });
    }
  }

  return (
    <Router>
      <div className="container">
        <Route path="/add/:id" render={(props) => (
          <AddColor {...props} onAddColor={handleAddColor} />
        )} />
        <Board userId="000000" colorsAndTypes={colorsAndTypes} onRemoveColor={handleRemoveColor} />
      </div>
    </Router>
  );
}
export default App;
