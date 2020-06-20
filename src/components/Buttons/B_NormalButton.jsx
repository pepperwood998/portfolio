import React from 'react';

function B_NormalButton({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

export default B_NormalButton;
