import React from 'react';

import Container from '../../components/UI/Container/Container';
import IntroLosing from '../../components/sections/IntroLosing/IntroLosing';
import Faq from '../../components/sections/Faq/Faq';
import './LosingWeight.scss';

function LosingWeight() {
  return (
    <div>
      <IntroLosing />
      <Container>
        <Faq />
      </Container>
    </div>
  );
}

export default LosingWeight;
