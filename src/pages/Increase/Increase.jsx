import React from 'react';

import { otherPrograms } from '../../data/OtherProgramsData';
import Container from '../../components/UI/Container/Container';
import PickIncrease from '../../components/sections/Pick/PickIncrease';
import OtherPrograms from '../../components/sections/OtherPrograms/OtherPrograms';
import AboutCompany from '../../components/sections/AboutCompany/AboutCompany';
import './Increase.scss';

function Increase() {
  let programs = otherPrograms.slice(0, 4);
  return (
    <div>
      <Container>
        <h1 className="title">Набор</h1>
      </Container>
      <PickIncrease />
      <Container>
        <OtherPrograms programs={programs} />
        <AboutCompany />
      </Container>
    </div>
  );
}

export default Increase;
