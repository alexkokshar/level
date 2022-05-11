import React from 'react';

import { losing750InfoData } from '../../../../../data/Losing750Data';
import { losing750SliderData } from '../../../../../data/Losing750Data';
import { losing750TotalData } from '../../../../../data/ProgramsData';
import PickSlider from '../../PickSlider/PickSlider';
import Total from '../../Total/Total';
import './Losing750.scss';

function Losing750() {
  return (
    <div className="program-box">
      <PickSlider data={losing750InfoData} info={losing750SliderData} />
      <Total data={losing750TotalData} meals="4 блюда" />
    </div>
  );
}

export default Losing750;
