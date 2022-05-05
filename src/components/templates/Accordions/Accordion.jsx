import React, { useState } from 'react';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          data-v-144a32d1=""
        >
          <path
            d="M16 9.97342H9.14286V16.8306H6.85714V9.97342H0V7.68771H6.85714V0.830566H9.14286V7.68771H16V9.97342Z"
            fill="#C5C5C5"
            data-v-144a32d1=""
          ></path>
        </svg>
      </button>
      <div className="accordion__body">{body}</div>
    </div>
  );
}

export default Accordion;
