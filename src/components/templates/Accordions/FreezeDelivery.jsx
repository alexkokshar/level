import React from 'react';

function FreezeDelivery() {
  return (
    <div>
      <div className="reg">При заказе на 2 дня — нет заморозки;</div>
      <div className="reg">При заказе на 4 дня — нет заморозки;</div>
      <div className="reg">При заказе на 5 дней — нет заморозки;</div>
      <div className="reg">При заказе на 6 дней — нет заморозки;</div>
      <div className="reg">При заказе на 12 дней — 4 дня;</div>
      <div className="reg">При заказе на 20 дня — 10 дней;</div>
      <div className="reg">При заказе на 24 дня — 10 дней;</div>
      <div className="reg">При заказе на 30 дней — 14 дней.</div>
    </div>
  );
}

export default FreezeDelivery;
