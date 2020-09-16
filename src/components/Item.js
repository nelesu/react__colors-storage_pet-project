import React from 'react';
import Container from "./container.component";

const Item = ({ userId, colors, onRemoveColor }) => {
  return (
    <div>
      <h2>Colors</h2>
      <Container userId={userId} colors={colors} onRemoveColor={onRemoveColor} />
    </div>
  );
}

export default Item;
