import React from 'react';

import decorLeft from '../../../assets/images/losing/decor-bottom-left.png';
import decorRight from '../../../assets/images/losing/decor-top-right.png';
import girl from '../../../assets/images/losing/intro-bg.png';
import './IntroLosing.scss';

function IntroLosing() {
  return (
    <div className="introlosing">
      <img src={decorLeft} alt="decor" className="introlosing__decor-left" />
      <img src={decorRight} alt="decor" className="introlosing__decor-right" />
      <div className="introlosing__content">
        <div className="introlosing__text">
          Питание для
          <span> похудения</span> по подписке
        </div>
        <img
          src={girl}
          alt="Девушка меряет талию измерительное лентой"
          className="introlosing__girl"
        />
      </div>
    </div>
  );
}

export default IntroLosing;
