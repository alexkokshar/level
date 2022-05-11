import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import PickTab from '../PickTab/PickTab';
import './PickSlider.scss';

const days = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый', 'Шестой', 'Седьмой'];

function PickSlider({ data, info }) {
  return (
    <div className="pickslider" style={{ background: info.back }}>
      <div className="pickslider__inner">
        <div className="pickslider__info">
          <div className="pickslider__name">{info.name}</div>
          <div className="pickslider__description reg">{info.descr}</div>
        </div>
        <Swiper loop={true} modules={[Navigation]} navigation={true} className="days-slider">
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="days-slider__text">{days[idx]} день примерного меню</div>
              <PickTab data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PickSlider;
