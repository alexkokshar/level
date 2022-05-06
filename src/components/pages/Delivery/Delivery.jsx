import React from 'react';

import Container from '../../UI/Container/Container';
import DeliveryInfo from '../../sections/DeliveryInfo/DeliveryInfo';
import DeliveryFaqs from '../../sections/DeliveryFaqs/DeliveryFaqs';
import './Delivery.scss';

function Delivery() {
  return (
    <div className="delivery">
      <Container>
        <DeliveryInfo />
        <DeliveryFaqs />
      </Container>
    </div>
  );
}

export default Delivery;
