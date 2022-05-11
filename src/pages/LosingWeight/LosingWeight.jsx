import React from 'react';

import Container from '../../components/UI/Container/Container';
import IntroLosing from '../../components/sections/IntroLosing/IntroLosing';
import Benefits from '../../components/sections/Benefits/Benefits';
import AboutMeal from '../../components/sections/AboutMeal/AboutMeal';
import PickLosing from '../../components/sections/Pick/PickLosing';
import GetStarted from '../../components/sections/GetStarted/GetStarted';
import Faq from '../../components/sections/Faq/Faq';
import './LosingWeight.scss';

function LosingWeight() {
  return (
    <div>
      <IntroLosing />
      <Benefits />
      <AboutMeal />
      <PickLosing />
      <GetStarted />
      <Container>
        <Faq />
      </Container>
    </div>
  );
}

export default LosingWeight;
