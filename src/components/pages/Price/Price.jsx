import React from 'react';

import Container from '../../UI/Container/Container';
import OrderProcess from '../../sections/OrderProcess/OrderProcess';
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
