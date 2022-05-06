import React from 'react';

import Container from '../../UI/Container/Container';
import Intro from '../../sections/Intro/Intro';
import WorkFlow from '../../sections/WorkFlow/WorkFlow';
import OrderProcess from '../../sections/OrderProcess/OrderProcess';
import Production from '../../sections/Production/Production';
import InstaReview from '../../sections/InstaReview/InstaReview';
import AboutCompany from '../../sections/AboutCompany/AboutCompany';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <Container>
        <Intro />
        <WorkFlow />
        <OrderProcess />
        <Production />
        <InstaReview />
        <AboutCompany />
      </Container>
    </div>
  );
}

export default Home;
