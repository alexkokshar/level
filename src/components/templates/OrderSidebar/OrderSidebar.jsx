import React, { useContext } from 'react';

import { ModalContext } from '../../../App';
import './OrderSidebar.scss';

function OrderSidebar() {
  const { setIsModalOpen } = useContext(ModalContext);
  return (
    <div className="sidebar">
      <div className="sidebar__order">
        <div className="sidebar__order-title">Заказать еду легко</div>
        <div className="sidebar__order-text reg">Выбирай программу и достигай цели</div>
        <a href="#pick" className="sidebar__order-link">
          Оформить заказ
        </a>
      </div>
      <div className="sidebar__info">
        <button className="sidebar__call-order" onClick={() => setIsModalOpen(true)}>
          Заказать звонок
        </button>
        <div className="sidebar__description reg">Наш менеджер перезвонит в течение 5 минут</div>
        <a className="sidebar__tel" href="tel:88007758549">
          8 (800) 775-85-49
        </a>
      </div>
    </div>
  );
}

export default OrderSidebar;
