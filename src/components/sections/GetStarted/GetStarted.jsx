import React from 'react';

import Container from '../../UI/Container/Container';
import './GetStarted.scss';

function GetStarted() {
  return (
    <div className="getstarted">
      <Container>
        <div className="getstarted__inner">
          <h3 className="getstarted__title">Начни легко!</h3>
          <div className="getstarted__text">Промокод 10% на первый заказ</div>
          <div className="getstarted__order">
            <div className="getstarted__promocode">EASY</div>
            <a href="#pick" className="getstarted__link">
              Заказать
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default GetStarted;
