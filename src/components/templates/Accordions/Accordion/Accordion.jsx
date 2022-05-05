import React, { useState } from 'react';

import cross from '../../../../assets/images/icons/cross.svg';
import './Accordion.scss';

function Accordion({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        className={`accordion__btn ${isOpen && 'accordion__btn-open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="accordion__name">{title}</div>
        <img src={cross} alt="cross icon" />
      </button>
      <div className="accordion__body">{body}</div>
    </div>
  );
}

export default Accordion;
