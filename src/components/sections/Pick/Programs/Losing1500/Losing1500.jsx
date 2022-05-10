import React from 'react';

import { losing1500TotalData } from '../../../../../data/ProgramsData';
import Total from '../../Total/Total';
import './Losing1500.scss';

function Losing1500() {
  return (
    <div>
      <Total data={losing1500TotalData} meals="6 блюд" />
    </div>
  );
}

export default Losing1500;
