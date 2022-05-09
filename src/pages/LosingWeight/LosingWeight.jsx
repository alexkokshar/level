import React from 'react';

import Container from '../../components/UI/Container/Container';
import IntroLosing from '../../components/sections/IntroLosing/IntroLosing';
import Benefits from '../../components/sections/Benefits/Benefits';
import Faq from '../../components/sections/Faq/Faq';
import './LosingWeight.scss';

function LosingWeight() {
  return (
    <div>
      <IntroLosing />
      <Benefits />
      <Container>
        <Faq />
      </Container>
    </div>
  );
}

export default LosingWeight;
