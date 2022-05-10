import React from 'react';

import { detoxTotalData } from '../../../../../data/ProgramsData';
import Total from '../../Total/Total';
import './DetoxProgram.scss';

function DetoxProgram() {
  return (
    <div>
      <Total data={detoxTotalData} meals="8 напитков" />
    </div>
  );
}

export default DetoxProgram;
