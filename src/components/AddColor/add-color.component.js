import React, { useState } from 'react';
import InputHexColor from "./module/InputHexColor";
import styled from "styled-components";
const WrapperAddColor = styled.div`
  display: grid;
  grid-template-columns: max-content max-content auto;
  grid-template-rows: min-content;
`;
const WrapperSelectInputType = styled.div`
  
`;

const AddColor = ({ onAddColor }) => {
  const [colorEntry, setColorEntry] = useState('');
  const updateEntry = (e) => {
    setColorEntry(e.target.value);
  }
  const handleBtnAddColorClick = (e) => {
    onAddColor(colorEntry);
    setColorEntry('');
  };

  const handleEnterDown = (e) => {
    if (e.keyCode = "Enter") {
      onAddColor(colorEntry);
      setColorEntry('');
    }
  }
  return (
    <div>
      <WrapperAddColor>
        <InputHexColor colorEntry={colorEntry} updateEntry={updateEntry} />
        <button onClick={handleBtnAddColorClick} onKeyDown={handleEnterDown} type="submit">Add Color</button>
      </WrapperAddColor>
      <WrapperSelectInputType />
    </div>
  );
}

export default AddColor;
