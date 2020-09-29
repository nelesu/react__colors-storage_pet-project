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
  const [colors, setColors] = useState(["#00010a", "#0d1016", "#15547e", "#00010a", "#0d1016", "#15547e", "#00010a", "#0d1016", "#15547e", "#00010a", "#0d1016", "#15547e"]);
  const handleAddColor = (color) => {
    // if (isCorrectColorName(color)) {
    setColors([...colors, `${color}`]);
    // } else {
      console.log(`Color "${color}" is incorrect`);
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
