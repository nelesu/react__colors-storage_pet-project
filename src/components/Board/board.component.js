import React from 'react';
import Container from "./module/container.component";

const Board = ({ userId, colorsAndTypes, onRemoveColor }) => {
  return (
    <div>
      <h2>Saved Colors</h2>
      <Container userId={userId} colorsAndTypes={colorsAndTypes} onRemoveColor={onRemoveColor} />
    </div>
  );
}

export default Board;
