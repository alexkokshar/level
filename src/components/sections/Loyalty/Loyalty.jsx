import React from 'react';

import cashback from '../../../assets/images/loyalty/cashback.jpg';
import certificate from '../../../assets/images/loyalty/certificate.jpg';
import referral from '../../../assets/images/loyalty/referral.png';

import './Loyalty.scss';

function Loyalty() {
  return (
    <div className="loyalty">
      <h1 className="loyalty__title title">Программа лояльности</h1>
      <ul className="loyalty__cards">
        <li className="loyalty__item">
          <div className="loyalty__info">
            <img src={cashback} alt="cashback" className="loyalty__img" />
            <div className="loyalty__text reg">Мы возвращаем бонусами 3% от стоимости заказа.</div>
            <div className="loyalty__text reg">
              Оплачивай ими до 50% стоимости следующего заказа.
            </div>
          </div>
          <button className="loyalty__btn">Подробнее</button>
        </li>
        <li className="loyalty__item">
          <div className="loyalty__info">
            <img src={certificate} alt="certificate" className="loyalty__img" />
            <div className="loyalty__text reg">
              Выбери номинал (от 2500 ₽), и мы отправим красиво оформленный сертификат на нужный
              имейл. Действует во всех городах присутствия.
            </div>
            <div className="loyalty__text reg">Заказать можно в чате.</div>
          </div>
          <button className="loyalty__btn">Подробнее</button>
        </li>
        <li className="loyalty__item">
          <div className="loyalty__info">
            <img src={referral} alt="referral" className="loyalty__img" />
            <div className="loyalty__text reg">
              Подари другу скидку 10% на первый заказ в Level Kitchen.
            </div>
            <div className="loyalty__text reg">
              Когда он ею воспользуется, мы начислим тебе 1500 бонусов.
            </div>
          </div>
          <button className="loyalty__btn">Подробнее</button>
        </li>
      </ul>
    </div>
  );
}

export default Loyalty;
