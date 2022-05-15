import React, { useState } from 'react';

import './PickTab.scss';

function PickTab({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  const { pic, title, text } = data[activeTab];

  return (
    <div className="picktab">
      <div className="picktab__body">
        <img src={pic} alt="Контейнер с едой" className="picktab__big-img" />
        <div className="picktab__info">
          <div className="picktab__meal">{title}</div>
          <div className="picktab__text reg">{text}</div>
        </div>
      </div>
      <div className="picktab__tabs">
        {data.map((item) => (
          <div key={item.id} className="picktab__tab" onClick={() => setActiveTab(item.id)}>
            <img
              src={item.pic}
              alt="Контейнер с едой"
              className="picktab__small-img"
              style={{ opacity: item.id === activeTab && '0.4' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PickTab;
