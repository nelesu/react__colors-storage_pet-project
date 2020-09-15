import React, { useState } from 'react';


const Form = (props) => {
  const [colorEntry, setColorEntry] = useState('');

  const updateColor = (e) => {
    setColorEntry(e.target.value);
  }

  const submitColor = (e) => {
    props.handleSubmitColor(colorEntry);
  }

  return (
    <div>
      <input placeholder="Enter a color" value={colorEntry} onChange={updateColor}></input>
      <button onClick={submitColor} type="submit">Add Color</button>
    </div>
  );
}

export default Form;
