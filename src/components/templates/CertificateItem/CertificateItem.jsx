import React, { useState } from 'react';

import './CertificateItem.scss';

function CertificateItem({ item }) {
  const [isActive, setIsActive] = useState(2);
  return (
    <div className="ticket" style={{ background: item.background }}>
      <div className="ticket__descr reg">Сертификат</div>
      <div className="ticket__program">{item.program}</div>
      <div className="ticket__calories reg">{item.calories}</div>
      <div className="ticket__selection">
        <button
          className={`ticket__select ${isActive === 1 && 'ticket__select-active'}`}
          onClick={() => setIsActive(1)}
        >
          <div className="ticket__days">{item.firstPeriod}</div>
          <div className="ticket__price reg">{item.firstPrice}</div>
        </button>
        <button
          className={`ticket__select ${isActive === 2 && 'ticket__select-active'}`}
          onClick={() => setIsActive(2)}
        >
          <div className="ticket__days">{item.secondPeriod}</div>
          <div className="ticket__price">{item.secondPrice}</div>
        </button>
      </div>
      <button className="ticket__confirm">Оформить</button>
    </div>
  );
}

export default CertificateItem;
