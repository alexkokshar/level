import React, { useState } from 'react';

import './PickTab.scss';

function PickTab({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  const { pic, picWebp, title, text } = data[activeTab];

  return (
    <div className="picktab">
      <div className="picktab__body">
        <picture>
          <source type="image/webp" srcSet={`${picWebp} 1x`} />
          <img src={pic} alt="Контейнер с едой" className="picktab__big-img" />
        </picture>
        <div className="picktab__info">
          <div className="picktab__meal">{title}</div>
          <div className="picktab__text reg">{text}</div>
        </div>
      </div>
      <div className="picktab__tabs">
        {data.map((item) => (
          <div key={item.id} className="picktab__tab" onClick={() => setActiveTab(item.id)}>
            <picture>
              <source type="image/webp" srcSet={`${item.picWebp} 1x`} />
              <img
                src={item.pic}
                alt="Контейнер с едой"
                className="picktab__small-img"
                style={{ opacity: item.id === activeTab && '0.4' }}
              />
            </picture>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PickTab;
