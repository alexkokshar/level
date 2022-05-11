import React from 'react';

import { hitInfoData } from '../../../../../data/HitProgramData';
import { hitSliderData } from '../../../../../data/HitProgramData';
import { hitTotalData } from '../../../../../data/ProgramsData';
import PickSlider from '../../PickSlider/PickSlider';
import Total from '../../Total/Total';
import './HitProgram.scss';

function HitProgram() {
  return (
    <div className="program-box" id="pick">
      <PickSlider data={hitInfoData} info={hitSliderData} />
      <Total data={hitTotalData} meals="4 блюда" />
    </div>
  );
}

export default HitProgram;
