import React from 'react';
import { Link } from 'react-router-dom';

import rightArrow from '../../../assets/images/icons/right_arrow.svg';
import './Program.scss';

function Program({ item }) {
  return (
    <Link to={item.to} className="other__link" style={{ background: item.background }}>
      <div className="other__hit">
        <div className="other__info">
          <div className="other__program">{item.program}</div>
          <span className="other__calories reg">{item.calories}</span>
          <span className="other__calories-text reg">ккал</span>
        </div>
        <img src={rightArrow} alt="right arrow" />
      </div>
    </Link>
  );
}

export default Program;
