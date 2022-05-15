import React, { useState } from 'react';

import closeIcon from '../../../assets/images/icons/close.svg';
import './Modal.scss';

function Modal({ isModalOpen, setIsModalOpen }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [typeError, setTypeError] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const submitModal = (e) => {
    e.preventDefault();
    if (!phoneNumber) {
      setTypeError('empty');
    } else if (phoneNumber.length !== 10) {
      setTypeError('phoneLenght');
    } else {
      setIsPhoneValid(true);
      setPhoneNumber('');
    }
  };

  const typePhoneNumber = (e) => {
    let phoneNumber = e.target.value.replace(/\D/g, '');
    setPhoneNumber(phoneNumber);
    setTypeError('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPhoneValid(false);
    setPhoneNumber('');
  };

  return (
    <div className={`modal ${isModalOpen && 'modal-open'}`} onClick={closeModal}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__btn">
          <button onClick={closeModal}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>

        {!isPhoneValid && (
          <div className="modal__content">
            <div className="modal__title">Оформление заказа</div>
            <form className="modal__form" onSubmit={submitModal}>
              <label className="reg">
                +7
                <input
                  type="tel"
                  name="tel"
                  value={phoneNumber}
                  onChange={typePhoneNumber}
                  maxLength={10}
                />
              </label>
              {typeError === 'empty' && <p className="modal__error">Введите номер телефона</p>}
              {typeError === 'phoneLenght' && (
                <p className="modal__error">Номер должен состоять из 11 цифр</p>
              )}
              <p className="modal__privacy reg">
                Нажимая на кнопку "Отправить", я соглашаюсь с условиями политики конфиденциальности
              </p>
              <button className="modal__send reg">Отправить</button>
            </form>
          </div>
        )}
        {isPhoneValid && (
          <div className="modal__content">
            <div className="modal__confirm">
              <div>Спасибо!</div>
              <div>В течении 5 минут с Вами свяжется наш специалист для подтверждения заказа!</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
