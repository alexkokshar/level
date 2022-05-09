import React from 'react';

import Container from '../../components/UI/Container/Container';
import Company from '../../components/sections/Company/Company';
import Production from '../../components/sections/Production/Production';
import ReviewSlider from '../../components/sections/ReviewSlider/ReviewSlider';
import './About.scss';

function About() {
  return (
    <div className="about">
      <Container>
        <Company />
        <Production />
        <ReviewSlider />
      </Container>
    </div>
  );
}

export default About;
