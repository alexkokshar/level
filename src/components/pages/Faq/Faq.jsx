import React from 'react';

import Container from '../../UI/Container/Container';
import Faqs from '../../sections/Faq/Faq';
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
