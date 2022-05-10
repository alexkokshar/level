import React from 'react';

import Container from '../../UI/Container/Container';
import aboutPictire from '../../../assets/images/losing/about-1.png';
import aboutPictire2 from '../../../assets/images/losing/about-2.png';
import './AboutMeal.scss';

function AboutMeal() {
  return (
    <div className="aboutmeal">
      <Container>
        <div className="aboutmeal__inner">
          <div className="aboutmeal__item">
            <img
              src={aboutPictire}
              alt="Девушка с контейнером для приема пищи"
              className="aboutmeal__img"
            />
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
            <img src={aboutPictire2} alt="Контейнеры для приема пищи" className="aboutmeal__img" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutMeal;
