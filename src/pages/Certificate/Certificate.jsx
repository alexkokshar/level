import React from 'react';

import Container from '../../components/UI/Container/Container';
import CertificateProcess from '../../components/sections/SertificateProcess/SertificateProcess';
import CertificateItem from '../../components/templates/CertificateItem/CertificateItem';
import './Certificate.scss';

const data = [
  {
    id: 1,
    program: 'Набор',
    calories: '2 000 / 2 500 / 3 500 Ккал',
    firstPeriod: '6 дней',
    firstPrice: '7700 ₽',
    secondPeriod: '12 дней',
    secondPrice: '15000 ₽',
    background: '#f5e8e9',
  },
  {
    id: 2,
    program: 'Баланс',
    calories: '1 500 / 2 000 / 2 500 Ккал',
    firstPeriod: '6 дней',
    firstPrice: '6900 ₽',
    secondPeriod: '12 дней',
    secondPrice: '13700₽',
    background: '#E8F5F5',
  },
  {
    id: 3,
    program: 'Снижение',
    calories: '750 / 1 000 / 1 500 Ккал',
    firstPeriod: '6 дней',
    firstPrice: '6400 ₽',
    secondPeriod: '12 дней',
    secondPrice: '12700 ₽',
    background: '#E8F5EC',
  },
  {
    id: 4,
    program: 'Detox',
    calories: '660 Ккал',
    firstPeriod: '2 дня',
    firstPrice: '4000 ₽',
    secondPeriod: '4 дня',
    secondPrice: '8000 ₽',
    background: '#FCF6EB',
  },
];

function Certificate() {
  return (
    <div className="certificate">
      <Container>
        <h1 className="certificate__title title">Сертификаты</h1>
        <div className="certificate__selection">
          {data.map((item) => (
            <CertificateItem key={item.id} item={item} />
          ))}
        </div>

        <CertificateProcess />
      </Container>
    </div>
  );
}

export default Certificate;
