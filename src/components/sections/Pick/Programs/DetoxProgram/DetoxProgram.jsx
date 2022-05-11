import React from 'react';

import { detoxInfoData } from '../../../../../data/DetoxProgramData';
import { detoxSliderData } from '../../../../../data/DetoxProgramData';
import { detoxTotalData } from '../../../../../data/ProgramsData';
import PickSlider from '../../PickSlider/PickSlider';
import Total from '../../Total/Total';
import './DetoxProgram.scss';

function DetoxProgram() {
  return (
    <div className="program-box" id="pick">
      <PickSlider data={detoxInfoData} info={detoxSliderData} />
      <Total data={detoxTotalData} meals="8 напитков" />
    </div>
  );
}

export default DetoxProgram;
