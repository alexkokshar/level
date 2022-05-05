import React from 'react';

import './Production.scss';

import courier from '../../../assets/images/production/courier.svg';
import cow from '../../../assets/images/production/cow.svg';

function Production() {
  return (
    <section className="production">
      <div className="production__info">
        <h2 className="production__title subtitle">Собственное производство площадью 10000 м2</h2>
        <div className="production__text reg">
          Уникальный современный цех с онлайн мониторингом всех процессов. Фильтруем воздух,
          обеззараживаем воду, знаем температуру каждой котлеты. На это интересно посмотреть.
        </div>
        <iframe
          className="production__video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oqSexqqHdCQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="production__details">
        <div className="production__details-row">
          <img src={courier} alt="Курьер" className="production__img" />
          <div className="production__subtitle">350 пунктуальных курьеров</div>
          <ul className="production__list reg">
            <li className="production__item">Своя служба доставки</li>
            <li className="production__item">
              Экспресс-доставка: привезем в течение выбранного часа
            </li>
            <li className="production__item">По городу + 100 км</li>
            <li className="production__item">При заказе до 12:00 привезем завтра</li>
          </ul>
        </div>
        <div className="production__details-row">
          <img src={cow} alt="Корова" className="production__img" />
          <div className="production__subtitle">Только проверенные поставщики продуктов</div>
          <ul className="production__list reg">
            <li className="production__item">Ежедневная поставка продуктов</li>
            <li className="production__item">Локальные компании, отвечающие за качество</li>
            <li className="production__item">Соблюдаем ГОСТ по хранению продуктов</li>
            <li className="production__item">Мониторим температуру на каждом складе</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Production;
