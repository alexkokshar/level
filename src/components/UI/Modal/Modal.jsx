import React from 'react';

import closeIcon from '../../../assets/images/icons/close.svg';
import './Modal.scss';

function Modal({ isModalOpen, setIsModalOpen }) {
  return (
    <div className={`modal ${isModalOpen && 'modal-open'}`} onClick={() => setIsModalOpen(false)}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__btn">
          <button onClick={() => setIsModalOpen(false)}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>

        <div className="modal__content">
          <div className="modal__title">Оформление заказа</div>
          <form className="modal__form">
            <label className="reg">
              +7
              <input type="tel" name="tel" />
            </label>
            <p className="modal__privacy reg">
              Нажимая на кнопку "Отправить", я соглашаюсь с условиями политики конфиденциальности
            </p>
            <button className="modal__send reg">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
