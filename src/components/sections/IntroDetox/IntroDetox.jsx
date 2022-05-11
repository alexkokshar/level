import React from 'react';

import Container from '../../UI/Container/Container';
import './IntroDetox.scss';

function IntroDetox() {
  return (
    <div className="introdetox">
      <Container>
        <div className="introdetox__inner">
          <div className="introdetox__content">
            <h1 className="introdetox__title">Detox</h1>
            <div className="introdetox__text">
              Очищение и легкость. 8 бутылочек соков и смузи в день
            </div>
            <a href="#pick" className="introdetox__link">
              Попробовать
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default IntroDetox;
