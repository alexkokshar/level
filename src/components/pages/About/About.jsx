import React from 'react';

import Container from '../../UI/Container/Container';
import Company from '../../sections/Company/Company';
import Production from '../../sections/Production/Production';
import ReviewSlider from '../../sections/ReviewSlider/ReviewSlider';
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
