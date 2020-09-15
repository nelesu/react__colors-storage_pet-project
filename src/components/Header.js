import React from 'react';
import Form from './Form.js';

const Header = (props) => {
  return (
    <div>
      <Form handleSubmitColor={props.handleSubmitColor} />
    </div>
  );
}

export default Header;
