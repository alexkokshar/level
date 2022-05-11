import React from 'react';

import { losing1500InfoData } from '../../../../../data/Losing1500Data';
import { losing1500SliderData } from '../../../../../data/Losing1500Data';
import { losing1500TotalData } from '../../../../../data/ProgramsData';
import PickSlider from '../../PickSlider/PickSlider';
import Total from '../../Total/Total';
import './Losing1500.scss';

function Losing1500() {
  return (
    <div className="program-box">
      <PickSlider data={losing1500InfoData} info={losing1500SliderData} />
      <Total data={losing1500TotalData} meals="6 блюд" />
    </div>
  );
}

export default Losing1500;
