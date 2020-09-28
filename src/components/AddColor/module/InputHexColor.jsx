import React from 'react';
import styled from "styled-components";

const Input = styled.input`  
background: papayawhip;
  border-radius: 3px;
  padding: 10px 15px;
  padding-left: 28px;
  /* for NumberSign */
`;

const Div = styled.div`
  position: relative;
`;

const NumberSign = styled.div`
  left: 15px;
/* 15 +  40px */
  position: absolute;
  top: 7.5px;
`;

const InputHexColor = ({ colorEntry, updateEntry }) => {

  return (
    <Div>
      <Input type="text" inputColor="rebeccapurple" value={colorEntry} onChange={updateEntry}>
      </Input>
      <NumberSign>#</NumberSign>
    </Div>
  );
}

export default InputHexColor;
