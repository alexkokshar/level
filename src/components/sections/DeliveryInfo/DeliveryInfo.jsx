import React from 'react';

import './DeliveryInfo.scss';

function DeliveryInfo() {
  return (
    <div className="delivery">
      <div className="delivery__column">
        <div className="delivery__title">Способы оплаты</div>
        <div className="delivery__text reg">Apple Pay, Google Pay</div>
        <div className="delivery__text reg">Картой на сайте</div>
        <div className="delivery__text reg">Картой курьеру при получении</div>
      </div>
      <div className="delivery__column">
        <div className="delivery__title">Дни доставки</div>
        <div className="delivery__text reg">
          По всем программам через день с рационом питания на 2 дня
        </div>
        <div className="delivery__text reg">
          Это от 10 до 14 ланчбоксов, которые легко помещаются в холодильник
        </div>
      </div>
      <div className="delivery__column">
        <div className="delivery__title">Время доставки</div>
        <div className="delivery__text reg">Через день с рационом питания на 2 дня</div>
        <div className="delivery__text reg">Доставим в двухчасовой интервал с 6:00 до 12:00</div>
        <div className="delivery__text reg">
          Курьер будет ждать 15 минут, чтобы ты в комфортном темпе забрал пакет.
        </div>
        <div className="delivery__text reg">
          Можно сократить интервал доставки до 1 часа за 300 ₽
        </div>
        <div className="delivery__text reg">Действует заморозка</div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
