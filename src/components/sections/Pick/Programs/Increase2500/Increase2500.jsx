import React from 'react';

import { increase2500InfoData } from '../../../../../data/Increase2500Data';
import { increase2500SliderData } from '../../../../../data/Increase2500Data';
import { increase2500TotalData } from '../../../../../data/ProgramsData';
import PickSlider from '../../PickSlider/PickSlider';
import Total from '../../Total/Total';
import './Increase2500.scss';

function Increase2500() {
  return (
    <div className="program-box">
      <PickSlider data={increase2500InfoData} info={increase2500SliderData} />
      <Total data={increase2500TotalData} meals="4 блюда" />
    </div>
  );
}

export default Increase2500;
