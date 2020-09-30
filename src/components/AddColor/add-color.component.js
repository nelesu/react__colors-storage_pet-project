import React, { useState } from 'react';
// Components
import InputHexColor from "./module/input-hex-color.component";
import ImportRGBColor from "./module/input-rgb-color.component";
import ImportRGBAColor from "./module/input-rgba-color.component";
// Utils
import isCorrectColorName from './../../utils/isCorrectColorName';

import styled from "styled-components";

const INITIALRGB = ["", "", ""];
const INITIALRGBA = ["", "", "", ""];


const WrapperAddColor = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content auto;
  grid-template-rows: min-content;
`;

const AddColor = ({ onAddColor }) => {

  let currentInput = null;
  const [colorEntry, setColorEntry] = useState({ hex: "", rgb: INITIALRGB, rgba: INITIALRGBA });
  const [colorInputType, setColorInputType] = useState('hex');

  const updateEntry = ({ type, color }) => {
    if (type === "hex") {
      setColorEntry(prevState => {
        let newColorEntry = { ...prevState };
        newColorEntry.hex = color;
        return newColorEntry;
      });
    };
    if (type === "rgb") {
      setColorEntry(prevState => {
        let newColorEntry = { ...prevState };
        newColorEntry.rgb = color;
        return newColorEntry;
      });
    };
    if (type === "rgba") {
      setColorEntry(prevState => {
        let newColorEntry = { ...prevState };
        newColorEntry.rgba = color;
        return newColorEntry;
      });
    }
  };

  const addingColor = () => {
    // check array of color's name is correct
    if (colorInputType === 'rgb') {
      let colorArray = colorEntry.rgb;
      console.log(colorArray, 'adding rgb color');

      if (isCorrectColorName({ color: colorArray, type: colorInputType })) {
        onAddColor(
          colorInputType, `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
        );
      } else {
        // pop-up window with caution
      }
      // adding color to the board from the current rgb

    } else if (colorInputType === 'rgba') {
      let colorArray = colorEntry.rgba;

      console.log(colorArray, 'adding rgba color');

      if (isCorrectColorName({ color: colorArray, type: colorInputType })) {
        onAddColor(
          colorInputType, `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${colorArray[3]})`
        );
      } else {
        // pop-up window with caution
      }

      // adding color to the board from the current rgba
    } else if (colorInputType === 'hex' && isCorrectColorName({ color: colorEntry.hex, type: colorInputType })) {
      console.log(colorEntry.hex, 'adding hex color');
      onAddColor(colorInputType, '#' + colorEntry.hex);
    } else {
      console.log("Not a correct color name");
    }

    setColorEntry(({ ...prevState }) => {
      let newColorEntry = prevState;
      newColorEntry.hex = "";
      let emptyRgb = newColorEntry.rgb.map(() => "");
      let emptyRgba = newColorEntry.rgba.map(() => "");
      newColorEntry.rgb = emptyRgb;
      newColorEntry.rgba = emptyRgba;
      return newColorEntry;
    });
  };

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


  switch (colorInputType) {
    case 'hex':
      currentInput = <InputHexColor handlePressEnter={handlePressEnter} colorEntry={colorEntry.hex} updateEntry={updateEntry} />;
      break;
    case 'rgb':
      currentInput = <ImportRGBColor colorEntry={colorEntry.rgb} handlePressEnter={handlePressEnter} updateEntry={updateEntry} />;
      break;
    case 'rgba':
      currentInput = <ImportRGBAColor colorEntry={colorEntry.rgba} updateEntry={updateEntry} handlePressEnter={handlePressEnter} />;
      break;
    default:
      currentInput = null;
      console.log('No suitable current input');
      break;
  }


  return (
    <div>
      <WrapperAddColor>
        <select value={colorInputType} onChange={selectColorInputType}>
          <option value="hex">Hex</option>
          <option value="rgba">RGBA</option>
          <option value="rgb">RGB</option>
        </select>
        {currentInput}
        <button onClick={handleBtnAddColorClick} type="submit">Add Color</button>
      </WrapperAddColor>
    </div>
  );
}

export default AddColor;
