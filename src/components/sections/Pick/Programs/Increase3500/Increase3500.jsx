import React from 'react';

import { increase3500TotalData } from '../../../../../data/ProgramsData';
import Total from '../../Total/Total';
import './Increase3500.scss';

function Increase3500() {
  return (
    <div>
      <Total data={increase3500TotalData} meals="4 блюда" />
    </div>
  );
}

export default Increase3500;
