import React from 'react';

import Process from '../../templates/Process/Process';

import clipboard from '../../../assets/images/icons/process/clipboard.svg';
import call from '../../../assets/images/icons/process/call.svg';
import shopping_bag from '../../../assets/images/icons/process/shopping_bag.svg';
import trophy from '../../../assets/images/icons/process/trophy.svg';

const items = [
  {
    id: 1,
    icon: clipboard,
    text: 'Оформляешь заказ',
    alt: 'clipboard',
  },
  {
    id: 2,
    icon: call,
    text: 'Созваниваемся и подтверждаем',
    alt: 'call',
  },
  {
    id: 3,
    icon: shopping_bag,
    text: 'Доставляем еду по утрам',
    alt: 'shopping bag',
  },
  {
    id: 4,
    icon: trophy,
    text: 'Достигаешь своей цели',
    alt: 'trophy',
  },
];

function OrderProcess() {
  return (
    <>
      <Process items={items}></Process>
    </>
  );
}

export default OrderProcess;
