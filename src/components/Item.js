import React from 'react';
import Container from "./Container";

const Item = ({ userId, colors }) => {
  return (
    <div>
      <h2>Colors</h2>
      <Container userId={userId} colors={colors} />
    </div>
  );
}

export default Item;
