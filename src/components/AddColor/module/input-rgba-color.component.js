import React from 'react';
import styled from "styled-components";

// Utils
import toCorrectPartOfColor from './../../../utils/toCorrectPartOfColor';

const Form = styled.form`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
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



const toCorrectAlpha = (value) => {
  let deletedZero = value.replace(/0{2,}$/, '').replace(/(?<=0)\d{1,}/, '').replace(/^\d{2}/, '');
  
  if (deletedZero <= 1 && deletedZero >= 0) {
    if (deletedZero.length > 8) {
      return deletedZero.slice(0, 8);
    } else {
      return deletedZero;
    };
  } else {
    console.log("Alpha is incorrect");
    return 0;
  }
};

const InputRGBAColor = ({ colorEntry, updateEntry, handlePressEnter }) => {

  const PreparationForUpdateEntry = (e) => {
    e.preventDefault();

    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (name === "red") {
      let currentRGBColor = colorEntry;
      currentRGBColor[0] = toCorrectPartOfColor(value);
      updateEntry({ type: "rgba", color: currentRGBColor });
    }
    if (name === "green") {
      let currentRGBColor = colorEntry;
      currentRGBColor[1] = toCorrectPartOfColor(value);
      updateEntry({ type: "rgba", color: currentRGBColor });
    }
    if (name === "blue") {
      let currentRGBColor = colorEntry;
      currentRGBColor[2] = toCorrectPartOfColor(value);
      updateEntry({ type: "rgba", color: currentRGBColor });
    }
    if (name === "alpha") {
      let currentRGBColor = colorEntry;
      currentRGBColor[3] = toCorrectAlpha(value);
      updateEntry({ type: "rgba", color: currentRGBColor });
    }
  }

  return (
    <Form onChange={PreparationForUpdateEntry} onKeyUp={handlePressEnter}>
      <Input type="number" placeholder="red" name='red' value={colorEntry[0]} />
      <Input type="number" placeholder="green" name='green' value={colorEntry[1]} />
      <Input type="number" placeholder="blue" name='blue' value={colorEntry[2]} />
      <Input type="text" placeholder="alpha" name='alpha' value={colorEntry[3]} />
    </Form>
  );
}

export default InputRGBAColor;
