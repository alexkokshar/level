import React from 'react';

import Container from '../../components/UI/Container/Container';
import OrderProcess from '../../components/sections/OrderProcess/OrderProcess';
import './Price.scss';

function Price() {
  return (
    <div className="price">
      <Container>
        <OrderProcess />
      </Container>
    </div>
  );
}

export default Price;
