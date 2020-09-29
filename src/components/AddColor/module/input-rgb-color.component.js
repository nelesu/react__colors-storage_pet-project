import React from 'react';
import styled from "styled-components";


const Form = styled.form`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  position: relative;
  padding-left: 40px;
`;

const Input = styled.input`
  background-color:  papayawhip;
  border-radius: 3px;
  padding: 10px 15px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    margin: 0;
  }
`;

const RgbLabel = styled.span`
  position: absolute;
  top: 6px;
`;

const toCorrectNumberValue = (value) => {
  if (value.length > 3) {
    console.log("There should be only three characters");
    return value.slice(0, 3);
  } else if (value <= 255 && value >= 0) {
    return value;
  } else if (value < 0) {
    console.log('Must be greater than 0 or equal to 0');
    return 0;
  } else if (value > 255) {
    console.log('Must be less than 255');
    return 255;
  }
}


const InputRGBColor = ({ colorEntry, updateEntry, handlePressEnter }) => {

  const PreparationForUpdateEntry = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (name === "first") {
      let currentRGBColor = colorEntry;
      currentRGBColor[0] = toCorrectNumberValue(value);
      updateEntry({ type: "rgb", color: currentRGBColor });
    }
    if (name === "second") {
      let currentRGBColor = colorEntry;
      currentRGBColor[1] = toCorrectNumberValue(value);
      updateEntry({ type: "rgb", color: currentRGBColor });
    }
    if (name === "third") {
      let currentRGBColor = colorEntry;
      currentRGBColor[2] = toCorrectNumberValue(value);
      updateEntry({ type: "rgb", color: currentRGBColor });
    }

  }

  return (
    <Form onChange={PreparationForUpdateEntry} onKeyUp={handlePressEnter}>
      <RgbLabel>rgb</RgbLabel>
      <Input type="number" name='first' value={colorEntry[0]} />
      <Input type="number" name='second' value={colorEntry[1]} />
      <Input type="number" name='third' value={colorEntry[2]} />
    </Form>
  );
}

export default InputRGBColor;
