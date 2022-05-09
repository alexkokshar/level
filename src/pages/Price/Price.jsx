import React from 'react';

import Container from '../../components/UI/Container/Container';
import PriceTable from '../../components/sections/PriceTable/PriceTable';
import OrderProcess from '../../components/sections/OrderProcess/OrderProcess';
import './Price.scss';

function Price() {
  return (
    <div className="price-page">
      <Container>
        <PriceTable />
        <OrderProcess />
      </Container>
    </div>
  );
}

export default Price;
