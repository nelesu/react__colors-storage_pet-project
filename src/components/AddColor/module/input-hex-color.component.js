import React from 'react';
import styled from "styled-components";

const Input = styled.input`  
  background-color:  papayawhip;
  border-radius: 3px;
  padding: 10px 15px;
  padding-left: 30px;
  /* for NumberSign */

`;

const Div = styled.div`
  position: relative;
`;

const NumberSign = styled.div`
  left: 15px;
/* 15 +  40px */
  position: absolute;
  top: 8.5px;
`;

const InputHexColor = ({ colorEntry, updateEntry, handlePressEnter, handleAddColor }) => {
  const handleChange = (e) => {
    let color = e.target.value;
    updateEntry({ type: "hex", color: color });
  }

  return (
    <Div>
      <Input type="text" onKeyUp={handlePressEnter} inputColor="rebeccapurple" value={colorEntry} onChange={handleChange}>
      </Input>
      <NumberSign>#</NumberSign>
    </Div>
  );
}

export default InputHexColor;
