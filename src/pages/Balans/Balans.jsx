import React from 'react';

import { otherPrograms } from '../../data/OtherProgramsData';
import Container from '../../components/UI/Container/Container';
import Balance2000 from '../../components/sections/Pick/Programs/Balance2000/Balance2000';
import OtherPrograms from '../../components/sections/OtherPrograms/OtherPrograms';
import AboutCompany from '../../components/sections/AboutCompany/AboutCompany';
import './Balans.scss';

function Balans() {
  let programs = [...otherPrograms.slice(0, 3), ...otherPrograms.slice(4)];
  return (
    <div>
      <Container>
        <h1 className="title">Баланс</h1>
      </Container>
      <Balance2000 />
      <Container>
        <OtherPrograms programs={programs} />
        <AboutCompany />
      </Container>
    </div>
  );
}

export default Balans;
