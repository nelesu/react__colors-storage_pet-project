import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import isCorrectColorName from './utils/isCorrectColorName';

function App() {
  const [colors, addColor] = useState(["#00010a", "#0d1016", "#15547e"]);
  const handleSubmitColor = (color) => {
    if (isCorrectColorName(color)) addColor([...colors, `#${color}`]); else {
      
    }

  }

  return (
    <div className="container">
      <Header handleSubmitColor={handleSubmitColor} />
      <Item userId="000000" colors={colors} />
    </div>
  );
}

export default App;
