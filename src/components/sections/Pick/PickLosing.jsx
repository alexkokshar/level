import React, { useState } from 'react';

import Losing750 from './Programs/Losing750/Losing750';
import Losing1000 from './Programs/Losing1000/Losing1000';
import Losing1500 from './Programs/Losing1500/Losing1500';
import Balance2000 from './Programs/Balance2000/Balance2000';
import './PickLosing.scss';

function Pick() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="pick" id="pick">
      <h2 className="pick__title">Выберите программу</h2>
      <div className="pick__tabs">
        <div
          className={`pick__tab tab-losing ${activeTab === 1 && 'tab-active'}`}
          onClick={() => setActiveTab(1)}
        >
          <div className="pick__tab-name reg">Снижение</div>
          <div className="pick__tab-calories">750 ккал</div>
        </div>
        <div
          className={`pick__tab tab-losing ${activeTab === 2 && 'tab-active'}`}
          onClick={() => setActiveTab(2)}
        >
          <div className="pick__tab-name reg">Снижение</div>
          <div className="pick__tab-calories">1000 ккал</div>
        </div>
        <div
          className={`pick__tab tab-losing ${activeTab === 3 && 'tab-active'}`}
          onClick={() => setActiveTab(3)}
        >
          <div className="pick__tab-name reg">Снижение</div>
          <div className="pick__tab-calories">1500 ккал</div>
        </div>
        <div
          className={`pick__tab tab-balans ${activeTab === 4 && 'tab-active'}`}
          onClick={() => setActiveTab(4)}
        >
          <div className="pick__tab-name reg">Баланс</div>
          <div className="pick__tab-calories">2000 ккал</div>
        </div>
      </div>
      <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>
        <Losing750 />
      </div>
      <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>
        <Losing1000 />
      </div>
      <div style={{ display: activeTab === 3 ? 'block' : 'none' }}>
        <Losing1500 />
      </div>
      <div style={{ display: activeTab === 4 ? 'block' : 'none' }}>
        <Balance2000 />
      </div>
    </div>
  );
}

export default Pick;
