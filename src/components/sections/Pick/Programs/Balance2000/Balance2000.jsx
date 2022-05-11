import React from 'react';

import { balance2000InfoData } from '../../../../../data/Balance2000Data';
import { balance2000SliderData } from '../../../../../data/Balance2000Data';
import { balance2000TotalData } from '../../../../../data/ProgramsData';
import PickSlider from '../../PickSlider/PickSlider';
import Total from '../../Total/Total';
import './Balance2000.scss';

function Balance2000() {
  return (
    <div className="program-box">
      <PickSlider data={balance2000InfoData} info={balance2000SliderData} />
      <Total data={balance2000TotalData} meals="6 блюд" />
    </div>
  );
}

export default Balance2000;
