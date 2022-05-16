import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import './Intro.scss';
import nutrition from '../../../assets/images/intro/nutrition.jpg';
import nutritionSmall from '../../../assets/images/intro/nutrition-small.jpg';
import detox from '../../../assets/images/intro/detox.jpg';
import detoxSmall from '../../../assets/images/intro/detox-small.jpg';
import fitstars from '../../../assets/images/intro/fitstars.jpg';
import fitstarsSmall from '../../../assets/images/intro/fitstars-small.jpg';
import combo from '../../../assets/images/intro/combo.jpg';
import comboSmall from '../../../assets/images/intro/combo-small.jpg';

function Intro() {
  return (
    <Swiper pagination={true} modules={[Pagination]} loop className="intro__swiper">
      <SwiperSlide>
        <div className="intro__item">
          <picture>
            <source media="(min-width: 768px)" srcSet={nutrition} />
            <source media="(max-width: 768px)" srcSet={nutritionSmall} />
            <img className="intro__img" src={nutrition} alt="nutrition" />
          </picture>
          <a href="#pick" className="intro__btn">
            Заказать
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="intro__item">
          <picture>
            <source media="(min-width: 768px)" srcSet={detox} />
            <source media="(max-width: 768px)" srcSet={detoxSmall} />
            <img className="intro__img" src={detox} alt="nutrition" />
          </picture>
          <a href="#pick" className="intro__btn">
            Заказать
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="intro__item">
          <picture>
            <source media="(min-width: 768px)" srcSet={fitstars} />
            <source media="(max-width: 768px)" srcSet={fitstarsSmall} />
            <img className="intro__img" src={fitstars} alt="nutrition" />
          </picture>
          <a href="#pick" className="intro__btn">
            Заказать
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="intro__item">
          <picture>
            <source media="(min-width: 768px)" srcSet={combo} />
            <source media="(max-width: 768px)" srcSet={comboSmall} />
            <img className="intro__img" src={combo} alt="nutrition" />
          </picture>
          <a href="#pick" className="intro__btn">
            Заказать
          </a>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Intro;
