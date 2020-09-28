import React from 'react';
import Container from "./module/container.component";

const Board = ({ userId, colors, onRemoveColor }) => {
  return (
    <div>
      <h2>Saved Colors</h2>
      <Container userId={userId} colors={colors} onRemoveColor={onRemoveColor} />
    </div>
  );
}

export default Board;
