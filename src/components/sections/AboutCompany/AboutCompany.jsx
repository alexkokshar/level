import React from 'react';

import Description from '../../templates/Description/Description';
import Accordion from '../../templates/Accordions/Accordion/Accordion';
import AccNutritionPrograms from '../../templates/Accordions/AccNutritionPrograms';
import AccBenefits from '../../templates/Accordions/AccBenefits';
import OrderSidebar from '../../templates/OrderSidebar/OrderSidebar';

import './AboutCompany.scss';

function AboutCompany() {
  return (
    <div className="aboutcompany">
      <div className="aboutcompany__info">
        <Description />
        <Accordion title="Виды программ питания" body={<AccNutritionPrograms />} />
        <Accordion
          title="Преимущества здорового питания с компанией Level Kitchen"
          body={<AccBenefits />}
        />
      </div>
      <div className="aboutcompany__sidebar">
        <OrderSidebar />
      </div>
    </div>
  );
}

export default AboutCompany;
