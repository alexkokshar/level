import React from 'react';

import Container from '../../components/UI/Container/Container';
import DeliveryInfo from '../../components/sections/DeliveryInfo/DeliveryInfo';
import DeliveryFaqs from '../../components/sections/DeliveryFaqs/DeliveryFaqs';
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
