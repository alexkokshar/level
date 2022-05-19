import React from 'react';

import Container from '../../UI/Container/Container';

import woman_jpg from '../../../assets/images/losing/woman-with-meal.jpg';
import woman_jpg2x from '../../../assets/images/losing/woman-with-meal@2x.jpg';
import woman_jpg3x from '../../../assets/images/losing/woman-with-meal@3x.jpg';
import woman_webp from '../../../assets/images/losing/woman-with-meal.webp';
import woman_webp2x from '../../../assets/images/losing/woman-with-meal@2x.webp';
import woman_webp3x from '../../../assets/images/losing/woman-with-meal@3x.webp';

import containers_jpg from '../../../assets/images/losing/containers-with-meal.jpg';
import containers_jpg2x from '../../../assets/images/losing/containers-with-meal@2x.jpg';
import containers_jpg3x from '../../../assets/images/losing/containers-with-meal@3x.jpg';
import containers_webp from '../../../assets/images/losing/containers-with-meal.webp';
import containers_webp2x from '../../../assets/images/losing/containers-with-meal@2x.webp';
import containers_webp3x from '../../../assets/images/losing/containers-with-meal@3x.webp';

import './AboutMeal.scss';

function AboutMeal() {
  return (
    <div className="aboutmeal">
      <Container>
        <div className="aboutmeal__inner">
          <div className="aboutmeal__item">
            <picture className="aboutmeal__picture">
              <source srcSet={`${woman_webp} 1x, ${woman_webp2x} 2x, ${woman_webp3x} 3x`} />
              <img
                src={woman_jpg}
                srcSet={`${woman_jpg2x} 2x, ${woman_jpg3x} 3x`}
                alt="Девушка с контейнером для приема пищи"
                className="aboutmeal__img"
              />
            </picture>

            <div className="aboutmeal__info">
              <div className="aboutmeal__title">Это как?</div>
              <div className="aboutmeal__description reg">Очень просто.</div>
              <div className="aboutmeal__text reg">
                Каждые два дня перед завтраком ты получаешь пакет со здоровой едой в герметичных
                лоточках, в которой уже посчитаны все калории, белки, жиры и углеводы.
              </div>
              <div className="aboutmeal__details">
                <div className="aboutmeal__advice">
                  Как долго, когда и где питаться выбираешь сам
                </div>
                <div className="aboutmeal__advice reg">
                  Хоть 2 дня, хоть месяц. Только в будни или постоянно. С доставкой в офис, домой
                  или на дачу.
                </div>
              </div>
            </div>
          </div>
          <div className="aboutmeal__item">
            <div className="aboutmeal__info">
              <div className="aboutmeal__title">А вкусно?</div>
              <div className="aboutmeal__description reg">Вообще вкусно.</div>
              <div className="aboutmeal__text reg">
                В нашем меню и десерты есть, и салаты разнообразные, и даже пп-шная шаурма :)
              </div>
              <div className="aboutmeal__details">
                <div className="aboutmeal__advice">
                  Всю нашу еду делает не только диетолог, но и шеф-повар
                </div>
                <div className="aboutmeal__advice reg">
                  Поэтому она не только полезная, но и разнообразная
                </div>
              </div>
            </div>{' '}
            <picture className="aboutmeal__picture">
              <source
                srcSet={`${containers_webp} 1x, ${containers_webp2x} 2x, ${containers_webp3x} 3x`}
              />
              <img
                src={containers_jpg}
                srcSet={`${containers_jpg2x} 2x, ${containers_jpg3x} 3x`}
                alt="Контейнеры для приема пищи"
                className="aboutmeal__img"
              />
            </picture>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutMeal;
