import React from 'react';

import { losing1000InfoData } from '../../../../../data/Losing1000Data';
import { losing1000SliderData } from '../../../../../data/Losing1000Data';
import { losing1000TotalData } from '../../../../../data/ProgramsData';
import PickSlider from '../../PickSlider/PickSlider';
import Total from '../../Total/Total';
import './Losing1000.scss';

function Losing1000() {
  return (
    <div className="program-box">
      <PickSlider data={losing1000InfoData} info={losing1000SliderData} />
      <Total data={losing1000TotalData} meals="5 блюд" />
    </div>
  );
}

export default Losing1000;
