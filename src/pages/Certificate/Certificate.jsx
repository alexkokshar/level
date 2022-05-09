import React from 'react';

import Container from '../../components/UI/Container/Container';
import CertificateProcess from '../../components/sections/SertificateProcess/SertificateProcess';
import CertificateItem from '../../components/templates/CertificateItem/CertificateItem';
import OrderSidebar from '../../components/templates/OrderSidebar/OrderSidebar';
import Accordion from '../../components/templates/Accordions/Accordion/Accordion';
import CertificateValid from '../../components/templates/Accordions/Certificate';
import HowToGetCertificate from '../../components/templates/Accordions/HowToGetCertificate';
import HowToActivateCertificate from '../../components/templates/Accordions/HowToActivateCertificate';
import bag from '../../assets/images/bag.png';
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
        <div className="certificate__description">
          <div className="certificate__info">
            <div className="certificate__text">
              <h2 className="certificate__subtitle">
                Самый лучший подарок, за которым никуда не нужно ходить
              </h2>
              <p className="certificate__paragraph reg">
                Впервые в истории Level Kitchen! Подарочный Сертификат на полезное питание, который
                можно оформить за считанные минуты.
              </p>
              <p className="certificate__paragraph reg">
                Порадует друзей и близких, а также выручит в день рождения коллеги. Актуален на
                Новый год и любые праздники. Или когда просто хочешь приятно удивить кого-то без
                повода ;-)
              </p>
            </div>
            <img src={bag} alt="Сумка" className="certificate__bag" />
          </div>
          <div className="certificate__period">
            <div className="certificate__period-title">Действует целый год!</div>
            <div className="certificate__period-text reg">
              Сделай заказ за пару кликов, и уже через несколько минут красиво оформленный
              Сертификат придёт к тебе на почту.
            </div>
            <div className="certificate__period-text reg">
              Ты можешь его распечатать или оставить в электронном виде.
            </div>
          </div>
        </div>
        <CertificateProcess />

        <div className="certificate__faq">
          <h2 className="certificate__faq-title">Вопросы и ответы</h2>
          <div className="certificate__faq-content">
            <div className="certificate__faq-accordions">
              <Accordion title="Сколько действует сертификат?" body={<CertificateValid />} />
              <Accordion
                title="Как мне получить сертификат после оформления заказа?"
                body={<HowToGetCertificate />}
              />
              <Accordion
                title="Как потом активировать сертификат?"
                body={<HowToActivateCertificate />}
              />
            </div>
            <div className="certificate__faq-sidebar">
              <OrderSidebar />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Certificate;
