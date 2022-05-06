import React from 'react';

import Description from '../../templates/Description/Description';
import Accordion from '../../templates/Accordions/Accordion/Accordion';
import DeliveryTerms from '../../templates/Accordions/DeliveryTerms';
import OrderPayment from '../../templates/Accordions/OrderPayment';
import OrderSidebar from '../../templates/OrderSidebar/OrderSidebar';

import './DeliveryFaqs.scss';

function DeliveryFaqs() {
  return (
    <div className="deliveryfaqs">
      <div className="deliveryfaqs__info">
        <Description />
        <Accordion title="Условия доставки" body={<DeliveryTerms />} />
        <Accordion title="Оплата заказа" body={<OrderPayment />} />
      </div>
      <div className="deliveryfaqs__sidebar">
        <OrderSidebar />
      </div>
    </div>
  );
}

export default DeliveryFaqs;
