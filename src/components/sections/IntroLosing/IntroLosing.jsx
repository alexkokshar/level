import React from 'react';

import decorLeft from '../../../assets/images/losing/decor-bottom-left.png';
import decorRight from '../../../assets/images/losing/decor-top-right.png';
import womanWithTape_jpg from '../../../assets/images/losing/woman-with-tape.png';
import womanWithTap_webp from '../../../assets/images/losing/woman-with-tape.webp';
import womanWithTap_webp2x from '../../../assets/images/losing/woman-with-tape@2x.webp';
import womanWithTap_webp3x from '../../../assets/images/losing/woman-with-tape@3x.webp';
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
        <picture>
          <source
            type="image/webp"
            srcSet={`${womanWithTap_webp} 1x, ${womanWithTap_webp2x} 2x, ${womanWithTap_webp3x} 3x`}
          />
          <img
            src={womanWithTape_jpg}
            alt="Девушка меряет талию измерительное лентой"
            className="introlosing__girl"
          />
        </picture>
      </div>
    </div>
  );
}

export default IntroLosing;
