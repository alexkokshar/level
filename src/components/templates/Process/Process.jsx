import React from 'react';

import './Process.scss';

function Process({ items }) {
  return (
    <div className="process">
      <ul className="process__list">
        {items.map(
          // array must receive max 4 items
          (item) => (
            <li className="process__item" key={item.id}>
              <img src={item.icon} alt={item.alt} className="process__icon" />
              <div className="process__text reg">{item.text}</div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default Process;
