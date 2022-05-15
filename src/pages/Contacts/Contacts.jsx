import React from 'react';

import Container from '../../components/UI/Container/Container';
import './Contacts.scss';

function Contacts() {
  return (
    <div className="contacts">
      <Container>
        <h1 className="contacts__title title">Контакты</h1>
        <div className="contacts__wrapper">
          <div className="contacts__info">
            <div className="contacts__item">
              <div className="contacts__subtitle">Адрес</div>
              <address className="contacts__address reg">
                115191, г. Москва, <br /> ул. Рощинская 2-я, д.4, этаж 2, пом. 1, К 56, оф 1
              </address>
            </div>
            <div className="contacts__item">
              <div className="contacts__subtitle">Время работы</div>
              <address className="contacts__address reg">Круглосуточно</address>
            </div>
            <div className="contacts__item">
              <div className="contacts__subtitle">Телефон</div>
              <address className="contacts__address">
                <a className="contacts__address reg" href="tel:+88007758549">
                  8 (800) 775-85-49
                </a>
              </address>
            </div>
            <div className="contacts__item">
              <div className="contacts__subtitle">E-mail</div>
              <div className="contacts__text reg">Отдел клиентского сервиса</div>
              <a href="mailto:claim@levelkitchen.com" className="contacts__email reg">
                claim@levelkitchen.com
              </a>
            </div>
            <div className="contacts__item">
              <div className="contacts__text reg">Общие вопросы</div>
              <a href="mailto:info@levelkitchen.com" className="contacts__email reg">
                info@levelkitchen.com
              </a>
            </div>
            <div className="contacts__item">
              <div className="contacts__subtitle">Отдел закупок</div>
              <a href="mailto:offer@levelkitchen.com" className="contacts__email reg">
                offer@levelkitchen.com
              </a>
            </div>
            <div className="contacts__item">
              <div className="contacts__subtitle">PR отдел</div>
              <a href="mailto:pr@p-group.ru" className="contacts__email reg">
                pr@p-group.ru
              </a>
            </div>
            <div className="contacts__item">
              <div className="contacts__subtitle">Информация</div>
              <address className="contacts__address reg">
                ОГРН: 1187746870497
                <br /> ИНН: 7724457620
              </address>
            </div>
          </div>
          <div className="contacts__map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa5b763bab6d3210b825a71d726ab5df71c9277256c3816119623fd2b5d35ea37&amp;source=constructor"
              width="100%"
              height="450"
              frameBorder="0"
              title="yandex map"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contacts;
