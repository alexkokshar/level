import React from 'react';

import Process from '../../templates/Process/Process';

import check from '../../../assets/images/icons/process/check.svg';
import payment from '../../../assets/images/icons/process/payment.svg';
import envelope from '../../../assets/images/icons/process/envelope.svg';
import done from '../../../assets/images/icons/process/done.svg';

const items = [
  {
    id: 1,
    icon: check,
    text: 'Выбери нужный Сертификат',
    alt: 'clipboard',
  },
  {
    id: 2,
    icon: payment,
    text: 'Оплати его онлайн и получи кешбэк',
    alt: 'payment',
  },
  {
    id: 3,
    icon: envelope,
    text: 'Получи на почту письмо с сертификатом и инструкцией по активации',
    alt: 'envelope',
  },
  {
    id: 4,
    icon: done,
    text: 'Распечатай или подари в электронном виде',
    alt: 'done',
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
