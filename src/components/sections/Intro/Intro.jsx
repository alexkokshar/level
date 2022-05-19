import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import './Intro.scss';

import manWithMeal_jpg from '../../../assets/images/intro/men-with-meal.jpg';
import manWithMeal_jpg2x from '../../../assets/images/intro/men-with-meal@2x.jpg';
import manWithMeal_jpg3x from '../../../assets/images/intro/men-with-meal@3x.jpg';
import manWithMeal_webp from '../../../assets/images/intro/men-with-meal.webp';
import manWithMeal_webp2x from '../../../assets/images/intro/men-with-meal@2x.webp';
import manWithMeal_webp3x from '../../../assets/images/intro/men-with-meal@3x.webp';

import manWithMealSmall_jpg from '../../../assets/images/intro/men-with-meal-small.jpg';
import manWithMealSmall_jpg2x from '../../../assets/images/intro/men-with-meal-small@2x.jpg';
import manWithMealSmall_jpg3x from '../../../assets/images/intro/men-with-meal-small@3x.jpg';
import manWithMealSmall_webp from '../../../assets/images/intro/men-with-meal-small.webp';
import manWithMealSmall_webp2x from '../../../assets/images/intro/men-with-meal-small@2x.webp';
import manWithMealSmall_webp3x from '../../../assets/images/intro/men-with-meal-small@3x.webp';

import detox_jpg from '../../../assets/images/intro/detox.jpg';
import detox_jpg2x from '../../../assets/images/intro/detox@2x.jpg';
import detox_jpg3x from '../../../assets/images/intro/detox@3x.jpg';
import detox_webp from '../../../assets/images/intro/detox.webp';
import detox_webp2x from '../../../assets/images/intro/detox@2x.webp';
import detox_webp3x from '../../../assets/images/intro/detox@3x.webp';

import detoxSmall_jpg from '../../../assets/images/intro/detox-small.jpg';
import detoxSmall_jpg2x from '../../../assets/images/intro/detox-small@2x.jpg';
import detoxSmall_jpg3x from '../../../assets/images/intro/detox-small@3x.jpg';
import detoxSmall_webp from '../../../assets/images/intro/detox-small.webp';
import detoxSmall_webp2x from '../../../assets/images/intro/detox@2x.webp';
import detoxSmall_webp3x from '../../../assets/images/intro/detox-small@3x.webp';

import fitstars_jpg from '../../../assets/images/intro/fitstars.jpg';
import fitstars_jpg2x from '../../../assets/images/intro/fitstars@2x.jpg';
import fitstars_jpg3x from '../../../assets/images/intro/fitstars@3x.jpg';
import fitstars_webp from '../../../assets/images/intro/fitstars.webp';
import fitstars_webp2x from '../../../assets/images/intro/fitstars@2x.webp';
import fitstars_webp3x from '../../../assets/images/intro/fitstars@3x.webp';

import fitstarsSmall_jpg from '../../../assets/images/intro/fitstars-small.jpg';
import fitstarsSmall_jpg2x from '../../../assets/images/intro/fitstars-small@2x.jpg';
import fitstarsSmall_jpg3x from '../../../assets/images/intro/fitstars-small@3x.jpg';
import fitstarsSmall_webp from '../../../assets/images/intro/fitstars-small.webp';
import fitstarsSmall_webp2x from '../../../assets/images/intro/fitstars-small@2x.webp';
import fitstarsSmall_webp3x from '../../../assets/images/intro/fitstars-small@3x.webp';

import combo_jpg from '../../../assets/images/intro/combo.jpg';
import combo_jpg2x from '../../../assets/images/intro/combo@2x.jpg';
import combo_jpg3x from '../../../assets/images/intro/combo@3x.jpg';
import combo_webp from '../../../assets/images/intro/combo.webp';
import combo_webp2x from '../../../assets/images/intro/combo@2x.webp';
import combo_webp3x from '../../../assets/images/intro/combo@3x.webp';

import comboSmall_jpg from '../../../assets/images/intro/combo-small.jpg';
import comboSmall_jpg2x from '../../../assets/images/intro/combo-small@2x.jpg';
import comboSmall_jpg3x from '../../../assets/images/intro/combo-small@3x.jpg';
import comboSmall_webp from '../../../assets/images/intro/combo-small.webp';
import comboSmall_webp2x from '../../../assets/images/intro/combo-small@2x.webp';
import comboSmall_webp3x from '../../../assets/images/intro/combo-small@3x.webp';

function Intro() {
  return (
    <Swiper pagination={true} modules={[Pagination]} loop className="intro__swiper">
      <SwiperSlide>
        <div className="intro__item">
          <picture>
            <source
              type="image/webp"
              media="(max-width: 768px)"
              srcSet={`${manWithMealSmall_webp} 1x, ${manWithMealSmall_webp2x} 2x, ${manWithMealSmall_webp3x} 3x`}
            />
            <source
              media="(max-width: 768px)"
              srcSet={`${manWithMealSmall_jpg} 1x, ${manWithMealSmall_jpg2x} 2x, ${manWithMealSmall_jpg3x} 3x`}
            />
            <source
              type="image/webp"
              srcSet={`${manWithMeal_webp} 1x, ${manWithMeal_webp2x} 2x, ${manWithMeal_webp3x} 3x`}
            />
            <img
              className="intro__img"
              src={manWithMeal_jpg}
              srcSet={`${manWithMeal_jpg2x} 2x, ${manWithMeal_jpg3x} 3x`}
              alt="man with meal"
            />
          </picture>
          <a href="#pick" className="intro__btn">
            Заказать
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="intro__item">
          <picture>
            <source
              type="image/webp"
              media="(max-width: 768px)"
              srcSet={`${detoxSmall_webp} 1x, ${detoxSmall_webp2x} 2x, ${detoxSmall_webp3x} 3x`}
            />
            <source
              media="(max-width: 768px)"
              srcSet={`${detoxSmall_jpg} 1x, ${detoxSmall_jpg2x} 2x, ${detoxSmall_jpg3x} 3x`}
            />
            <source
              type="image/webp"
              srcSet={`${detox_webp} 1x, ${detox_webp2x} 2x, ${detox_webp3x} 3x`}
            />
            <img
              className="intro__img"
              src={detox_jpg}
              srcSet={`${detox_jpg2x} 2x, ${detox_jpg3x} 3x`}
              alt="man with meal"
            />
          </picture>
          <a href="#pick" className="intro__btn">
            Заказать
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="intro__item">
          <picture>
            <source
              type="image/webp"
              media="(max-width: 768px)"
              srcSet={`${fitstarsSmall_webp} 1x, ${fitstarsSmall_webp2x} 2x, ${fitstarsSmall_webp3x} 3x`}
            />
            <source
              media="(max-width: 768px)"
              srcSet={`${fitstarsSmall_jpg} 1x, ${fitstarsSmall_jpg2x} 2x, ${fitstarsSmall_jpg3x} 3x`}
            />
            <source
              type="image/webp"
              srcSet={`${fitstars_webp} 1x, ${fitstars_webp2x} 2x, ${fitstars_webp3x} 3x`}
            />
            <img
              className="intro__img"
              src={fitstars_jpg}
              srcSet={`${fitstars_jpg2x} 2x, ${fitstars_jpg3x} 3x`}
              alt="man with meal"
            />
          </picture>
          <a href="#pick" className="intro__btn">
            Заказать
          </a>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="intro__item">
          <picture>
            <source
              type="image/webp"
              media="(max-width: 768px)"
              srcSet={`${comboSmall_webp} 1x, ${comboSmall_webp2x} 2x, ${comboSmall_webp3x} 3x`}
            />
            <source
              media="(max-width: 768px)"
              srcSet={`${comboSmall_jpg} 1x, ${comboSmall_jpg2x} 2x, ${comboSmall_jpg3x} 3x`}
            />
            <source
              type="image/webp"
              srcSet={`${combo_webp} 1x, ${combo_webp2x} 2x, ${combo_webp3x} 3x`}
            />
            <img
              className="intro__img"
              src={combo_jpg}
              srcSet={`${combo_jpg2x} 2x, ${combo_jpg3x} 3x`}
              alt="man with meal"
            />
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
