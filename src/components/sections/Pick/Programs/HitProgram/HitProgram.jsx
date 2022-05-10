import React from 'react';

import { hitTotalData } from '../../../../../data/ProgramsData';
import Total from '../../Total/Total';
import './HitProgram.scss';

function HitProgram() {
  return (
    <div>
      <Total data={hitTotalData} meals="4 блюда" />
    </div>
  );
}

export default HitProgram;
