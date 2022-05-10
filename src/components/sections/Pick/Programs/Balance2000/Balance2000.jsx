import React from 'react';

import { balance2000TotalData } from '../../../../../data/ProgramsData';
import Total from '../../Total/Total';
import './Balance2000.scss';

function Balance2000() {
  return (
    <div>
      <Total data={balance2000TotalData} meals="6 блюд" />
    </div>
  );
}

export default Balance2000;
