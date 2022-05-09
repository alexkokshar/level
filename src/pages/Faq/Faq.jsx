import React from 'react';

import Container from '../../components/UI/Container/Container';
import Faqs from '../../components/sections/Faq/Faq';
import './Faq.scss';

function Faq() {
  return (
    <div className="faq">
      <Container>
        <Faqs />
      </Container>
    </div>
  );
}

export default Faq;
