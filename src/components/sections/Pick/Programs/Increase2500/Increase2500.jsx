import React from 'react';

import { increase2500TotalData } from '../../../../../data/ProgramsData';
import Total from '../../Total/Total';
import './Increase2500.scss';

function Increase2500() {
  return (
    <div>
      <Total data={increase2500TotalData} meals="4 блюда" />
    </div>
  );
}

export default Increase2500;
