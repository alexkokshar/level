import React from 'react';

import Container from '../../components/UI/Container/Container';
import Intro from '../../components/sections/Intro/Intro';
import WorkFlow from '../../components/sections/WorkFlow/WorkFlow';
import Pick from '../../components/sections/Pick/Pick';
import OrderProcess from '../../components/sections/OrderProcess/OrderProcess';
import Production from '../../components/sections/Production/Production';
import InstaReview from '../../components/sections/InstaReview/InstaReview';
import AboutCompany from '../../components/sections/AboutCompany/AboutCompany';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <Container>
        <Intro />
        <WorkFlow />
        <Pick />
        <OrderProcess />
        <Production />
        <InstaReview />
        <AboutCompany />
      </Container>
    </div>
  );
}

export default Home;
