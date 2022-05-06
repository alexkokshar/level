import React from 'react';

import './Company.scss';

function Company() {
  return (
    <div className="company">
      <h1 className="company__title title">О компании</h1>
      <div className="company__info">
        <div className="company__phrase reg">
          Достигни цели со вкусом. Полезное питание на каждый день. Быть здоровым — так вкусно!
        </div>
        <div className="company__column">
          <div className="company__subtitle">
            Level Kitchen — бренд продвинутого здорового питания от крупнейшего холдинга Performance
            Group.
          </div>
          <div className="company__text reg">
            Готовим по авторским рецептам под руководством команды диетологов. Отборные продукты и
            современные технологии обеспечивают отличный вкус наших блюд. Широкий выбор программ,
            которые подойдут как профессиональным спортсменам, так и тем, кто хочет похудеть или
            просто чувствовать себя лучше.
          </div>
          <div className="company__subtitle">Выбор чемпиона</div>
          <div className="company__text reg">
            Сооснователь бренда — победитель IFBB Pro League в номинации Men's Physique Денис Гусев.
            Он первым из россиян выиграл престижный турнир благодаря отличной физической форме.
            Денис убежден, что правильное питание — залог прекрасного самочувствия.
          </div>
          <div className="company__subtitle">Партнер Сбербанка и Mail.ru Group</div>
          <div className="company__text reg">
            Performance Group — один из крупнейших холдингов по продаже готовых рационов, является
            частью совместного предприятия между Сбербанком и Mail.ru Group в сфере цифровых
            технологий для рынков продуктов питания и транспорта.
          </div>
        </div>
        <div className="company__cosmo">
          <div className="company__cosmo-title">СМИ о нас</div>
          <div className="company__cosmo-text reg">
            «Оптимальное соотношение БЖУ позволяет добиться необходимого результата и не думать о
            том, что приготовить на завтра, а также забыть о походах в магазины и приготовлении
            пищи»
          </div>
          <a
            className="company__cosmo-link"
            href="https://www.cosmo.ru/health/diets/novyy-sezon-s-level-kitchen/"
          >
            Читать
          </a>
        </div>
      </div>
    </div>
  );
}

export default Company;
