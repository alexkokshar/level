import React from 'react';

import { otherPrograms } from '../../data/OtherProgramsData';
import Container from '../../components/UI/Container/Container';
import IntroDetox from '../../components/sections/IntroDetox/IntroDetox';
import OtherPrograms from '../../components/sections/OtherPrograms/OtherPrograms';
import AboutCompany from '../../components/sections/AboutCompany/AboutCompany';
import './Detox.scss';

function Detox() {
  let programs = [otherPrograms[0], ...otherPrograms.slice(2)];
  return (
    <div>
      <IntroDetox />
      <Container>
        <OtherPrograms programs={programs} />
        <AboutCompany />
      </Container>
    </div>
  );
}

export default Detox;