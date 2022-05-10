import React from 'react';

import { losing750TotalData } from '../../../../../data/ProgramsData';
import Total from '../../Total/Total';
import './Losing750.scss';

function Losing750() {
  return (
    <div>
      <Total data={losing750TotalData} meals="4 блюда" />
    </div>
  );
}

export default Losing750;
