import React from 'react';
import styled from "styled-components";


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
};
const toCorrectAlphaValue = (value) => {
  let deletedZero = value.replace(/0{0,}$/, '');
  if (deletedZero.length > 6) {
    return deletedZero.slice(0, 6);
  } else if (deletedZero <= 1 && deletedZero >= 0) {
    return deletedZero;
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
      currentRGBColor[0] = toCorrectNumberValue(value);
      updateEntry({ type: "rgba", color: currentRGBColor });
    }
    if (name === "green") {
      let currentRGBColor = colorEntry;
      currentRGBColor[1] = toCorrectNumberValue(value);
      updateEntry({ type: "rgba", color: currentRGBColor });
    }
    if (name === "blue") {
      let currentRGBColor = colorEntry;
      currentRGBColor[2] = toCorrectNumberValue(value);
      updateEntry({ type: "rgba", color: currentRGBColor });
    }
    if (name === "alpha") {
      let currentRGBColor = colorEntry;
      currentRGBColor[3] = toCorrectAlphaValue(value);
      updateEntry({ type: "rgba", color: currentRGBColor });
    }

  }

  return (
    <Form onChange={PreparationForUpdateEntry} onKeyUp={handlePressEnter}>
      <Input type="number" placeholder="red" name='red' value={colorEntry[0]} />
      <Input type="number" placeholder="green" name='green' value={colorEntry[1]} />
      <Input type="number" placeholder="blue" name='blue' value={colorEntry[2]} />
      <Input type="number" placeholder="alpha" name='alpha' value={colorEntry[3]} />
    </Form>
  );
}

export default InputRGBAColor;
