import React from 'react';

import { otherPrograms } from '../../data/OtherProgramsData';
import Container from '../../components/UI/Container/Container';
import HitProgram from '../../components/sections/Pick/Programs/HitProgram/HitProgram';
import OtherPrograms from '../../components/sections/OtherPrograms/OtherPrograms';
import AboutCompany from '../../components/sections/AboutCompany/AboutCompany';
import './Hit.scss';

function Hit() {
  let programs = otherPrograms.slice(1);

  return (
    <div>
      <Container>
        <h1 className="title">Хит</h1>
      </Container>
      <HitProgram />
      <Container>
        <OtherPrograms programs={programs} />
        <AboutCompany />
      </Container>
    </div>
  );
}

export default Hit;
