import React from 'react';

import closeIcon from '../../../assets/images/icons/close.svg';
import './Modal.scss';

function Modal({ isModalOpen, setIsModalOpen, children }) {
  return (
    <div className={`modal ${isModalOpen && 'modal-open'}`} onClick={() => setIsModalOpen(false)}>
      <div className="modal__body" onClick={(e) => e.stopPropagation()}>
        <div className="modal__btn">
          <button onClick={() => setIsModalOpen(false)}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>

        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
