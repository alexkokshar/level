import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../UI/Container/Container';
import './Header.scss';

import logo from '../../../assets/images/icons/logo.svg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <Container>
        <div className="header__inner">
          <div className="header__left">
            <Link to="/">
              <img src={logo} alt="Логотип leven kitchen" className="header__logo" />
            </Link>
            <button
              className={`header__burger ${isMenuOpen && 'header__burger-open'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-v-6e23594e=""
              >
                <rect x="0" width="25" height="3.42857" fill="black" data-v-6e23594e=""></rect>{' '}
                <rect
                  x="0"
                  y="9.42871"
                  width="25"
                  height="3.42857"
                  fill="black"
                  data-v-6e23594e=""
                ></rect>{' '}
                <rect
                  x="0"
                  y="19.57143"
                  width="25"
                  height="3.42857"
                  fill="black"
                  data-v-6e23594e=""
                ></rect>
              </svg>
            </button>
            <nav className={`header__links ${isMenuOpen && 'header__links-hide'}`}>
              <Link to="/about">О компании</Link>
              <Link to="/price">Прайс</Link>
              <Link to="/payment-and-delivery">Оплата и доставка</Link>
            </nav>
          </div>
          <ul className="header__socials">
            <li className="header__social">
              <a href="https://t.me/level_kitchen" className="header__telegram">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-6e23594e=""
                >
                  <path
                    d="M16.0045 32C24.8411 32 32.0046 24.8366 32.0046 16C32.0046 7.16344 24.8411 0 16.0045 0C7.16797 0 0.0045166 7.16344 0.0045166 16C0.0045166 24.8366 7.16797 32 16.0045 32Z"
                    fill="black"
                    className="header__social-icon"
                    data-v-6e23594e=""
                  ></path>{' '}
                  <path
                    d="M22.2208 9.0975L7.44579 14.795C6.43746 15.2 6.44329 15.7625 7.26079 16.0133L11.0541 17.1967L19.8308 11.6592C20.2458 11.4067 20.625 11.5425 20.3133 11.8192L13.2025 18.2367H13.2008L13.2025 18.2375L12.9408 22.1475C13.3241 22.1475 13.4933 21.9717 13.7083 21.7642L15.5508 19.9725L19.3833 22.8033C20.09 23.1925 20.5975 22.9925 20.7733 22.1492L23.2891 10.2925C23.5466 9.26 22.895 8.7925 22.2208 9.0975V9.0975Z"
                    fill="white"
                    data-v-6e23594e=""
                  ></path>
                </svg>
              </a>
            </li>
            <li className="header__social">
              <a href="https://www.instagram.com/level_kitchen/" className="header__instagram">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-6e23594e=""
                >
                  <path
                    d="M20.7479 8.51367H11.2253C9.70535 8.51367 8.46875 9.7522 8.46875 11.2745V20.812C8.46875 22.3343 9.70535 23.5732 11.2253 23.5732H20.7479C22.2678 23.5732 23.5048 22.3347 23.5048 20.812V11.2745C23.5048 9.7522 22.2682 8.51367 20.7479 8.51367ZM15.9866 21.0009C13.2575 21.0009 11.037 18.777 11.037 16.0433C11.037 13.3099 13.2575 11.0859 15.9866 11.0859C18.7161 11.0859 20.9365 13.3099 20.9365 16.0433C20.9365 18.7766 18.7157 21.0009 15.9866 21.0009ZM21.0956 12.1109C20.4496 12.1109 19.9242 11.5847 19.9242 10.938C19.9242 10.2913 20.4496 9.76504 21.0956 9.76504C21.7413 9.76504 22.2667 10.2913 22.2667 10.938C22.2667 11.5847 21.7413 12.1109 21.0956 12.1109Z"
                    fill="black"
                    className="header__social-icon"
                    data-v-6e23594e=""
                  ></path>{' '}
                  <path
                    d="M15.9872 13.1807C14.4118 13.1807 13.1289 14.4648 13.1289 16.0428C13.1289 17.6214 14.4118 18.9059 15.9872 18.9059C17.5634 18.9059 18.8452 17.6214 18.8452 16.0428C18.8452 14.4652 17.5631 13.1807 15.9872 13.1807Z"
                    fill="black"
                    className="header__social-icon"
                    data-v-6e23594e=""
                  ></path>{' '}
                  <path
                    d="M15.9868 0C7.16434 0 0.0117188 7.1638 0.0117188 16C0.0117188 24.8362 7.16434 32 15.9868 32C24.8092 32 31.9618 24.8362 31.9618 16C31.9618 7.1638 24.8092 0 15.9868 0ZM25.5962 20.8119C25.5962 23.4896 23.4216 25.6676 20.748 25.6676H11.2255C8.55222 25.6676 6.37731 23.4896 6.37731 20.8119V11.2744C6.37731 8.59698 8.55222 6.41868 11.2255 6.41868H20.748C23.4216 6.41868 25.5962 8.59698 25.5962 11.2744V20.8119Z"
                    fill="black"
                    className="header__social-icon"
                    data-v-6e23594e=""
                  ></path>
                </svg>
              </a>
            </li>
            <li className="header__social">
              <a href="https://www.facebook.com/levelkitchen/?fref=ts" className="header__facebook">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-6e23594e=""
                >
                  <path
                    d="M16.9086 32C25.7314 32 32.8837 24.8366 32.8837 16C32.8837 7.16344 25.7314 0 16.9086 0C8.08586 0 0.933594 7.16344 0.933594 16C0.933594 24.8366 8.08586 32 16.9086 32Z"
                    fill="black"
                    className="header__social-icon"
                    data-v-6e23594e=""
                  ></path>{' '}
                  <path
                    d="M20.5421 15.9827H17.8767V25H13.8385V15.9827H11.918V12.8136H13.8385V10.7629C13.8385 9.29638 14.5929 7 17.9127 7L20.9039 7.01156V10.0877H18.7336C18.3776 10.0877 17.877 10.2519 17.877 10.9515V12.8166H20.8949L20.5421 15.9827Z"
                    fill="white"
                    data-v-6e23594e=""
                  ></path>
                </svg>
              </a>
            </li>
            <li className="header__social">
              <a href="https://vk.com/levelkitchen" className="header__vk">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-6e23594e=""
                >
                  <circle
                    className="header__social-icon"
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#000000"
                    data-v-6e23594e=""
                  ></circle>{' '}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.2128 17.5374C23.8763 18.1852 24.5765 18.7946 25.1715 19.5076C25.4344 19.8245 25.6832 20.1514 25.8736 20.5192C26.1433 21.0419 25.899 21.6171 25.4303 21.6484L22.5166 21.647C21.7652 21.7094 21.1657 21.4069 20.6616 20.8931C20.2582 20.4822 19.8846 20.0449 19.4967 19.6201C19.3377 19.4465 19.1713 19.2831 18.9724 19.154C18.5747 18.8958 18.2294 18.9749 18.0021 19.3897C17.7706 19.8116 17.7181 20.2789 17.6954 20.7491C17.6642 21.4352 17.4568 21.6156 16.7676 21.647C15.2947 21.7164 13.8969 21.4936 12.5984 20.7506C11.4535 20.0956 10.5658 19.1709 9.79308 18.124C8.28861 16.0856 7.13649 13.8457 6.10101 11.543C5.86793 11.0242 6.03838 10.7457 6.6108 10.7359C7.56132 10.7174 8.5117 10.7187 9.46334 10.7346C9.84966 10.7402 10.1054 10.9618 10.2546 11.3268C10.7688 12.5912 11.3981 13.7943 12.1879 14.9094C12.3983 15.2063 12.6128 15.5032 12.9182 15.7122C13.2561 15.9435 13.5133 15.8668 13.6723 15.4904C13.7732 15.2518 13.8173 14.9947 13.8401 14.7391C13.9154 13.8597 13.9253 12.9818 13.7932 12.1054C13.7121 11.5585 13.4041 11.2045 12.8583 11.101C12.5798 11.0482 12.6213 10.9446 12.7562 10.7856C12.9903 10.5115 13.2106 10.3408 13.6497 10.3408H16.9426C17.461 10.4431 17.5761 10.676 17.6471 11.1976L17.6499 14.8553C17.6442 15.0573 17.7508 15.6565 18.1145 15.7902C18.4056 15.8853 18.5975 15.6524 18.7721 15.4678C19.5605 14.6311 20.1232 13.6422 20.6259 12.6182C20.849 12.1679 21.0408 11.7003 21.2267 11.2331C21.3644 10.8864 21.5806 10.7158 21.9711 10.7234L25.1403 10.7262C25.2343 10.7262 25.3294 10.7276 25.4204 10.7432C25.9544 10.8342 26.1007 11.0639 25.9358 11.5854C25.6759 12.4036 25.1703 13.0854 24.6759 13.7704C24.1473 14.5017 23.5821 15.208 23.058 15.9436C22.5764 16.6154 22.6147 16.954 23.2128 17.5374Z"
                    fill="white"
                    data-v-6e23594e=""
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className={`header__menu ${isMenuOpen && 'header__menu-open'}`}>
        <Container>
          <div className="nav">
            <nav className="nav__inner">
              <div className="nav__programs">
                <div className="nav__text reg">Программы</div>
                <Link className="nav__program" to="/hit">
                  Хит
                </Link>
                <Link className="nav__program" to="/detox">
                  Detox
                </Link>
                <Link className="nav__program" to="/losing-weight">
                  Снижение
                </Link>
                <Link className="nav__program" to="/balans">
                  Баланс
                </Link>
                <Link className="nav__program" to="/increase">
                  Набор
                </Link>
              </div>
              <div className="nav__pages">
                <Link className="nav__page" to="/about">
                  О компании
                </Link>
                <Link className="nav__page" to="/price">
                  Прайс
                </Link>
                <Link className="nav__page" to="/payment-and-delivery">
                  Оплата и доставка
                </Link>
                <Link className="nav__page" to="/faq">
                  Вопросы и ответы
                </Link>
                <Link className="nav__page" to="/contacts">
                  Контакты
                </Link>
                <Link className="nav__page" to="/loyalty">
                  Программа лояльности
                </Link>
                <a className="nav__page" href="https://blog.levelkitchen.com/">
                  Блог
                </a>
                <Link className="nav__page" to="/certificate">
                  Сертификат
                </Link>
              </div>
            </nav>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
