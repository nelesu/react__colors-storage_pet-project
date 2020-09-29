import React from 'react';
import styled from "styled-components";

// Utils
import toCorrectPartOfColor from './../../../utils/toCorrectPartOfColor';

const Form = styled.form`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  position: relative;
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



const InputRGBColor = ({ colorEntry, updateEntry, handlePressEnter }) => {

  const PreparationForUpdateEntry = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (name === "red") {
      let currentRGBColor = colorEntry;
      currentRGBColor[0] = toCorrectPartOfColor(value);
      updateEntry({ type: "rgb", color: currentRGBColor });
    }
    if (name === "green") {
      let currentRGBColor = colorEntry;
      currentRGBColor[1] = toCorrectPartOfColor(value);
      updateEntry({ type: "rgb", color: currentRGBColor });
    }
    if (name === "blue") {
      let currentRGBColor = colorEntry;
      currentRGBColor[2] = toCorrectPartOfColor(value);
      updateEntry({ type: "rgb", color: currentRGBColor });
    }

  }

  return (
    <Form onChange={PreparationForUpdateEntry} onKeyUp={handlePressEnter}>
      <Input type="number" placeholder="red" name='red' value={colorEntry[0]} />
      <Input type="number" placeholder="green" name='green' value={colorEntry[1]} />
      <Input type="number" placeholder="blue" name='blue' value={colorEntry[2]} />
    </Form>
  );
}

export default InputRGBColor;
