import React, { useState } from 'react';
// Components
import InputHexColor from "./module/input-hex-color.component";
import ImportRGBColor from "./module/input-rgb-color.component";

// utils
import partOfrgbToHex from '../../utils/partOfrgbToHex';

import styled from "styled-components";




const WrapperAddColor = styled.div`
  display: grid;
  grid-template-columns: max-content max-content auto;
  grid-template-rows: min-content;
`;
const WrapperSelectInputType = styled.div`
  
`;

const AddColor = ({ onAddColor }) => {


  const [colorEntry, setColorEntry] = useState({ hex: "", rgb: [] });
  const [colorInputType, setColorInputType] = useState('hex');

  const updateEntry = ({ type, color }) => {
    console.log(type, color, 'updateEntry, type');
    if (type === "hex") {
      setColorEntry(prevState => {
        let newColorEntry = { ...prevState };
        newColorEntry.hex = color;
        return newColorEntry;
      });

    }
    if (type === "rgb") {
      setColorEntry(prevState => {
        let newColorEntry = { ...prevState };
        newColorEntry.rgb = color;
        return newColorEntry;
      });
    }
  }

  const addingColor = () => {
    if (colorInputType === 'rgb') {
      setColorEntry(prevState => {
        let newColorEntry = { ...prevState };
        newColorEntry.hex = partOfrgbToHex(...newColorEntry.rgb);
        return newColorEntry;
      });
    };
    console.log(colorEntry.hex, 'addingColor');
    onAddColor(colorEntry.hex);
    setColorEntry(prevState => {
      let newColorEntry = { ...prevState };
      // newColorEntry.hex = "";
      // newColorEntry.rgb = [];
      return newColorEntry;
    });
  }

  const handleBtnAddColorClick = (e) => {
    addingColor();
  };

  const handlePressEnter = (e) => {
    if (e.keyCode === 13) {
      addingColor();
    }
  };

  const selectColorInputType = (e) => {
    setColorInputType(e.target.value);
  };

  let currentInput = null;
  switch (colorInputType) {
    case 'hex':
      currentInput = <InputHexColor handlePressEnter={handlePressEnter} colorEntry={colorEntry.hex} updateEntry={updateEntry} />
      break;
    case 'rgb':
      currentInput = <ImportRGBColor colorEntry={colorEntry.rgb} handlePressEnter={handlePressEnter} updateEntry={updateEntry} />
      break;
    default:
      break;
  }


  return (
    <div>
      <WrapperAddColor>
        {currentInput}
        <button onClick={handleBtnAddColorClick} type="submit">Add Color</button>
      </WrapperAddColor>
      <WrapperSelectInputType>
        <select value={colorInputType} onChange={selectColorInputType}>
          <option value="hex">Hex</option>
          <option value="rgba">RGBA</option>
          <option value="rgb">RGB</option>
        </select>
      </WrapperSelectInputType>
    </div>
  );
}

export default AddColor;
