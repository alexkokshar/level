import React, { useState, createContext, useContext } from 'react';

import { ModalContext } from '../../../../App';
import './Total.scss';

function Total({ data, meals }) {
  const [activeSelect, setActiveSelect] = useState(0);
  const { setIsModalOpen } = useContext(ModalContext);

  const { price, days } = data[activeSelect];
  const totalPrice = parseInt(price) * parseInt(days);
  const cashback = (totalPrice * 0.03).toFixed();

  return (
    <div className="total">
      <div className="total__selects">
        {data.map((item) => (
          <div
            className={`total__select ${activeSelect === item.id && 'total-active'}`}
            onClick={() => setActiveSelect(item.id)}
            key={item.id}
          >
            <div className="total__price">{item.price}</div>
            <div className="total__days">{item.days}</div>
          </div>
        ))}
      </div>
      <div className="total__details">
        <div className="total__dishes reg">
          {meals} в день за {parseInt(price)} ₽
        </div>
        <div className="total__delivery reg">Доставки раз в 2 дня с 6:00 до 12:00</div>
      </div>
      <div className="total__sum">
        <div className="total__sum-text reg">Итого {days}:</div>
        <div className="total__sum-num">{totalPrice} ₽</div>
      </div>
      <div className="total__cashback reg">{cashback} ₽ вернем на бонусный счет</div>
      <button className="total__order" onClick={() => setIsModalOpen(true)}>
        Оформить заказ
      </button>
    </div>
  );
}

export default Total;
