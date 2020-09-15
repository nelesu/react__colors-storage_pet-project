import React from 'react';
import styled from "styled-components";


const Container = ({ colors }) => {

  return (
    <div>
      <ul>{colors.map((color, index) => {
        const Li = styled.li`
        border: 1px solid ${color};
        list-style: none;
        margin-left: -30px;
        color: ${color};
        `;
        return <Li key={index}>{color}</Li>
      })}</ul>
    </div >
  );
}

export default Container;
