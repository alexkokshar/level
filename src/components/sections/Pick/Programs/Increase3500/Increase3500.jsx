import React from 'react';

import { increase3500InfoData } from '../../../../../data/Increase3500Data';
import { increase3500SliderData } from '../../../../../data/Increase3500Data';
import { increase3500TotalData } from '../../../../../data/ProgramsData';
import PickSlider from '../../PickSlider/PickSlider';
import Total from '../../Total/Total';
import './Increase3500.scss';

function Increase3500() {
  return (
    <div className="program-box">
      <PickSlider data={increase3500InfoData} info={increase3500SliderData} />
      <Total data={increase3500TotalData} meals="4 блюда" />
    </div>
  );
}

export default Increase3500;
