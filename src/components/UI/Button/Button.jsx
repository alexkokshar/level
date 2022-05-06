import React from 'react';

import './Button.scss';

function Button({ children }) {
  return (
    <a className="custom-button" href="#/">
      {children}
    </a>
  );
}

export default Button;
