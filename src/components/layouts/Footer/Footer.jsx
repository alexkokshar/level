import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/icons/logo-footer.svg';
import telegram from '../../../assets/images/icons/footer/telegram-nav.svg';
import insta from '../../../assets/images/icons/footer/instagram-nav.svg';
import vk from '../../../assets/images/icons/footer/vk-nav.svg';
import facebook from '../../../assets/images/icons/footer/facebook-nav.svg';
import qr from '../../../assets/images/icons/footer/qr-mob-footer.png';
import Container from '../../UI/Container/Container';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__inner">
          <div className="footer__info">
            <div className="footer__contacts">
              <Link to="/">
                <img className="footer__logo" src={logo} alt="Логотип Level Kitchen" />
              </Link>
              <div className="footer__socials">
                <a href="https://t.me/level_kitchen">
                  <img src={telegram} alt="Телеграм" className="footer__social" />
                </a>
                <a href="https://www.instagram.com/level_kitchen/">
                  <img src={insta} alt="Инстаграм" className="footer__social" />
                </a>
                <a href="https://vk.com/levelkitchen">
                  <img src={vk} alt="ВКонтаакте" className="footer__social" />
                </a>
                <a href="https://www.facebook.com/levelkitchen/?fref=ts">
                  <img src={facebook} alt="Фейсбук" className="footer__social" />
                </a>
              </div>
              <address className="footer__address">
                115191, г. Москва, ул. Рощинская 2-я, д.4, этаж 2, пом. 1, К 56, оф 1
              </address>
            </div>
            <div className="footer__pages">
              <Link to="/certificate">Сертификат</Link>
              <Link to="/price">Прайс</Link>
              <a href="https://blog.levelkitchen.com/">Блог</a>
              <Link to="/faq">Вопросы и ответы</Link>
              <Link to="/payment-and-delivery">Доставка и оплата</Link>
              <Link to="/about">О компании</Link>
              <Link to="/loyalty">Программа лояльности</Link>
              <Link to="/contacts">Контакты</Link>
            </div>
            <div className="footer__download">
              <div className="footer__mobile">
                <img src={qr} alt="qr code" className="footer__qr" />
                <div className="footer__mobile-text">
                  Заказывай в одно касание и управляй доставкой
                </div>
              </div>
              <a className="footer__mobile-link" href="https://lvl.onelink.me/Uzzs/e353245">
                Мобильное приложение Level Kitchen
              </a>
            </div>
          </div>
          <div className="footer__towns">
            Компания Level Kitchen осуществляет доставку готового правильного питания на дом в
            городах: Москва и МО, Санкт-Петербург, Краснодар, Екатеринбург, Челябинск,
            Ростов-на-Дону, Калуга, Рязань, Ярославль, Владимир, Тула, Тверь, Нижний Новгород, Сочи,
            Анапа, Геленджик, Новороссийск.
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
