import React from 'react';

function TextInput({ error, type, ...rest }) {
  if (type !== 'textarea') return <input type={type} {...rest} />;
  else return <textarea {...rest} />;
}

export default TextInput;
