import React from 'react';

import './WorkFlow.scss';

import bag from '../../../assets/images/icons/workflow/bag.svg';
import gloves from '../../../assets/images/icons/workflow/gloves.svg';
import dish from '../../../assets/images/icons/workflow/dish.svg';
import sheet from '../../../assets/images/icons/workflow/sheet.svg';
import pot from '../../../assets/images/icons/workflow/pot.svg';
import clock from '../../../assets/images/icons/workflow/clock.svg';

const items = [
  {
    id: 1,
    icon: bag,
    text: 'Доставка каждые два дня с 6 до 12',
    alt: 'Сумка',
  },
  {
    id: 2,
    icon: gloves,
    text: 'Современное и безопасное производство',
    alt: 'Перчатки',
  },
  {
    id: 3,
    icon: dish,
    text: 'Меню не повторяется в течение месяца',
    alt: 'Блюдо',
  },
  {
    id: 4,
    icon: sheet,
    text: 'Готовим в ночь перед доставкой',
    alt: 'Лист',
  },
  {
    id: 5,
    icon: pot,
    text: 'Тушим, запекаем и су-вид',
    alt: 'Кастрюля',
  },
  {
    id: 6,
    icon: clock,
    text: 'Доставим еду к твоему завтраку',
    alt: 'Часы',
  },
];

function WorkFlow() {
  return (
    <div className="workflow">
      <ul className="workflow__list">
        {items.map((item) => (
          <li className="workflow__item" key={item.id}>
            <img className="workflow__img" src={item.icon} alt={item.alt} />
            <div className="workflow__text reg">{item.text}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkFlow;
