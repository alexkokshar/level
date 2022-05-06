import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import './ReviewSlider.scss';

function ReviewSlider() {
  return (
    <div className="reviewslider">
      <div className="reviewslider__descripiton">Более 1200 довольных клиентов</div>
      <Swiper navigation={true} modules={[Navigation]}>
        <SwiperSlide>
          <div className="reviewslider__item">
            <div className="reviewslider__name">Мария Голодковская</div>
            <div className="reviewslider__text reg">
              Каждый день говорю Денису Гусеву на упаковке еды доброе утро и спокойной ночи! <br />
              Могу сказать, что это на самом деле самая достойная и качественная еда с доставкой!{' '}
              <br />
              А я пробовала многие. Советую! <br />
              Спасибо Level Kitchen.
            </div>
            <div className="reviewslider__position reg">
              Тренер, нутрициолог, <br />
              консультант по питанию <br />
              и фитнесу, ведущая... <br />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviewslider__item">
            <div className="reviewslider__name">Надежда Карпова</div>
            <div className="reviewslider__text reg">
              Как же круто, когда после тренировки не нужно тратить время на кухню. <br />
              Приходишь домой, а еда уже готова. Вкусно, полезно и калории уже за тебя посчитали!
            </div>
            <div className="reviewslider__position reg">
              Футболистка <br />
              женской сборной <br />
              России <br />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviewslider__item">
            <div className="reviewslider__name">Дино МС</div>
            <div className="reviewslider__text reg">
              Level Kitchen — очень удобная тема. Курьер привозит еду на два дня. Все <br />
              готово — надо только разогреть. Еда вкусная и можно выбрать курс под себя
            </div>
            <div className="reviewslider__position reg">Русский рэп-исполнитель</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="reviewslider__item">
            <div className="reviewslider__name">Людмила Никитина</div>
            <div className="reviewslider__text reg">
              Пожалуй, лучшее, что я пробовала из сервиса <br />
              доставок питания – это однозначно! Я не трачу драгоценное время на подбор рациона,
              поход в магазин и готовку. Это за меня делает команда Level Kitchen, которую основал
              Денис Гусев, а он знает толк в качестве. Спасибо, Денис!
            </div>
            <div className="reviewslider__position reg">Мисс Олимпия</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ReviewSlider;
