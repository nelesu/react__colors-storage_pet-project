import React from 'react';
import Container from "./module/container.component";

const Board = ({ userId, colorsBody, onRemoveColor }) => {
  return (
    <div>
      <h2>Saved Colors</h2>
      <Container userId={userId} colorsBody={colorsBody} onRemoveColor={onRemoveColor} />
    </div>
  );
}

export default Board;
