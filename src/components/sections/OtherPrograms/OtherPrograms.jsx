import React from 'react';

import Program from '../../templates/Program/Program';
import './OtherPrograms.scss';

function OtherPrograms({ programs }) {
  return (
    <div className="other">
      <h2 className="other__title">Другие программы</h2>
      <div className="other__programs">
        {programs.map((item) => (
          <Program key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default OtherPrograms;
