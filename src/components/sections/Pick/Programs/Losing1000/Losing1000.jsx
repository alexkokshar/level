import React from 'react';

import { losing1000TotalData } from '../../../../../data/ProgramsData';
import Total from '../../Total/Total';
import './Losing1000.scss';

function Losing1000() {
  return (
    <div>
      <Total data={losing1000TotalData} meals="5 блюд" />
    </div>
  );
}

export default Losing1000;
