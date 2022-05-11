import React, { useState } from 'react';

import Increase2500 from './Programs/Increase2500/Increase2500';
import Increase3500 from './Programs/Increase3500/Increase3500';
import './PickIncrease.scss';

function Pick() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="pick" id="pick">
      <h2 className="pick__title">Выберите программу</h2>
      <div className="pick__tabs">
        <div
          className={`pick__tab tab-increase ${activeTab === 1 && 'tab-active'}`}
          onClick={() => setActiveTab(1)}
        >
          <div className="pick__tab-name reg">Набор</div>
          <div className="pick__tab-calories">2500 ккал</div>
        </div>
        <div
          className={`pick__tab tab-increase ${activeTab === 2 && 'tab-active'}`}
          onClick={() => setActiveTab(2)}
        >
          <div className="pick__tab-name reg">Набор</div>
          <div className="pick__tab-calories">3500 ккал</div>
        </div>
      </div>
      <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
        <Increase2500 />
      </div>
      <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
        <Increase3500 />
      </div>
    </div>
  );
}

export default Pick;
