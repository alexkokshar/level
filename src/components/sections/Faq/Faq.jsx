import React, { useState } from 'react';

import OrderSidebar from '../../templates/OrderSidebar/OrderSidebar';
import Accordion from '../../templates/Accordions/Accordion/Accordion';
import HowDeliveryIsGoing from '../../templates/Accordions/HowDeliveryIsGoing';
import HowMuchDelivery from '../../templates/Accordions/HowMuchDelivery';
import FirstDelivery from '../../templates/Accordions/FirstDelivery';
import CannotReceice from '../../templates/Accordions/CannotReceice';
import MayIChageSchedule from '../../templates/Accordions/MayIChageSchedule';
import FreezeDelivery from '../../templates/Accordions/FreezeDelivery';
import HealthyNutrition from '../../templates/Accordions/HealthyNutrition';
import KBGU from '../../templates/Accordions/KBGU';
import CookingMethods from '../../templates/Accordions/CookingMethods';
import WhatProducts from '../../templates/Accordions/WhatProducts';
import ChangeProduct from '../../templates/Accordions/ChangeProduct';
import HowManyCalories from '../../templates/Accordions/HowManyCalories';
import AmILoseWeight from '../../templates/Accordions/AmILoseWeight';
import HowManyMeals from '../../templates/Accordions/HowManyMeals';
import ExpirationDate from '../../templates/Accordions/ExpirationDate';
import MealWithoutWarming from '../../templates/Accordions/MealWithoutWarming';
import './Faq.scss';

function Faq() {
  const [tab, setTab] = useState(1);

  return (
    <div className="faq">
      <h1 className="faq__title title">Вопросы и ответы</h1>
      <div className="faq__content">
        <div className="faq__info">
          <div className="faq__tabs">
            <buttom
              className={`faq__tab ${tab === 1 && 'faq__tab-active'}`}
              onClick={() => setTab(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M17.6226 18.1801C16.4726 18.18 15.5369 17.2444 15.5369 16.0944V12.6307C15.5369 11.4806 16.4726 10.545 17.6226 10.545H23.0572C23.0901 10.545 23.1228 10.546 23.1554 10.5475V7.09707C23.1554 6.2089 22.4354 5.48889 21.5472 5.48889H1.60823C0.720004 5.48884 0 6.20884 0 7.09702V21.628C0 22.5162 0.720004 23.2362 1.60823 23.2362H21.5472C22.4354 23.2362 23.1554 22.5162 23.1554 21.628V18.1776C23.1228 18.1791 23.0901 18.1801 23.0572 18.1801H17.6226Z"
                  fill="#DDDDDD"
                ></path>
                <path
                  d="M23.0563 11.6877H17.6218C17.1011 11.6877 16.679 12.1099 16.679 12.6306V16.0943C16.679 16.615 17.1011 17.0371 17.6218 17.0371H23.0563C23.577 17.0371 23.9991 16.615 23.9991 16.0943V12.6306C23.9991 12.1098 23.577 11.6877 23.0563 11.6877ZM19.4944 15.7232C18.7429 15.7232 18.1336 15.1139 18.1336 14.3624C18.1336 13.6108 18.7429 13.0016 19.4944 13.0016C20.246 13.0016 20.8552 13.6108 20.8552 14.3624C20.8552 15.1139 20.246 15.7232 19.4944 15.7232Z"
                  fill="#DDDDDD"
                ></path>
                <path
                  d="M18.7479 2.54306C18.3881 1.45405 17.2136 0.86291 16.1247 1.2227L7.95459 3.92188H19.2034L18.7479 2.54306Z"
                  fill="#DDDDDD"
                ></path>
              </svg>
              <div className="faq__tab-name">Оплата и доставка</div>
            </buttom>
            <buttom
              className={`faq__tab ${tab === 2 && 'faq__tab-active'}`}
              onClick={() => setTab(2)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <g clip-path="url(#clip0pitaniye)">
                  <path
                    d="M25.647 11.9077C25.647 11.3714 25.2117 10.9361 24.6754 10.9361L18.7954 10.9361C17.9919 10.9361 17.338 10.2822 17.338 9.47872L17.338 8.81319L24.6754 8.81319C25.2117 8.81319 25.647 8.37792 25.647 7.84161C25.647 7.30529 25.2117 6.87003 24.6754 6.87003L17.338 6.87002L17.338 6.20498C17.338 5.40148 17.9919 4.74761 18.7954 4.74761L24.6754 4.74761C25.2117 4.74761 25.647 4.31234 25.647 3.77602C25.647 3.23971 25.2117 2.80444 24.6754 2.80444L18.7954 2.80444C16.9207 2.80444 15.3948 4.32983 15.3948 6.20498L15.3948 6.87002L10.1493 6.87002C9.81263 6.29145 9.19324 5.89844 8.47573 5.89844L1.94428 5.89844C0.871168 5.89844 0.00111563 6.76849 0.00111558 7.84161C0.00111553 8.91472 0.871168 9.78477 1.94428 9.78477L8.47573 9.78477C9.19324 9.78477 9.81263 9.39176 10.1493 8.81319L15.3948 8.81319L15.3948 9.47872C15.3948 11.3539 16.9207 12.8793 18.7954 12.8793L24.6754 12.8793C25.2122 12.8793 25.647 12.4445 25.647 11.9077Z"
                    fill="#DDDDDD"
                  ></path>
                  <path
                    d="M20.01 23.5491C23.3138 23.5491 26.0012 21.3698 26.0012 18.6912C26.0012 16.0125 23.3138 13.8333 20.01 13.8333C17.1166 13.8333 14.6959 15.5049 14.1392 17.7196L10.1494 17.7196C9.81273 17.141 9.19335 16.748 8.47584 16.748L1.94438 16.748C0.871273 16.748 0.00122054 17.618 0.00122049 18.6912C0.00122044 19.7643 0.871273 20.6343 1.94438 20.6343L8.47584 20.6343C9.19335 20.6343 9.81273 20.2413 10.1494 19.6627L14.1392 19.6627C14.6959 21.8775 17.1166 23.5491 20.01 23.5491Z"
                    fill="#DDDDDD"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0pitaniye">
                    <rect y="0.176758" width="26" height="26" fill="#DDDDDD"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="faq__tab-name">Питание</div>
            </buttom>
            <buttom
              className={`faq__tab ${tab === 3 && 'faq__tab-active'}`}
              onClick={() => setTab(3)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clip-path="url(#clip0producti)">
                  <path
                    d="M20.8453 8.67895C19.4886 7.04477 17.8793 6.29804 15.9071 6.10143C15.5865 6.06953 15.6311 6.06512 15.546 6.06512C14.5088 6.06512 13.5917 6.16953 12.674 6.39227C12.5924 5.90803 12.4554 5.44718 12.2652 5.01084C14.4727 5.18965 16.4114 3.60796 16.7066 1.43709C16.7493 1.12334 16.5923 0.816165 16.313 0.667026C14.1576 -0.4841 11.4688 0.46625 10.529 2.73949C9.89027 2.20276 9.11561 1.73182 8.18556 1.3147C7.80394 1.14355 7.35586 1.31413 7.18471 1.69576C7.01356 2.07738 7.18414 2.52551 7.56577 2.69666C9.61457 3.61553 10.7652 4.7952 11.1257 6.36591C8.46448 5.79671 5.96439 6.05575 3.95066 7.83836C2.69915 8.93667 1.93949 10.3687 1.68708 11.9336C1.49875 13.1097 1.63123 15.102 2.13814 16.7947C2.637 18.5494 3.50107 20.1725 4.7088 21.6217C5.05824 22.0367 5.49312 22.553 6.01787 22.9729C8.42383 24.8794 10.64 24.0363 11.9625 23.6883C12.3502 23.6418 15.4986 25.2396 18.1392 22.8488C20.8244 20.4046 22.3184 16.9079 22.3948 13.2419C22.42 11.5185 21.8987 9.98329 20.8453 8.67895Z"
                    fill="#DDDDDD"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0producti">
                    <rect y="0.176758" width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="faq__tab-name">Продукты</div>
            </buttom>
            <buttom
              className={`faq__tab ${tab === 4 && 'faq__tab-active'}`}
              onClick={() => setTab(4)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clip-path="url(#clip0pohudenia)">
                  <path
                    d="M19.5 0.176758H4.5C2.01415 0.176758 0 2.19091 0 4.67676V19.6768C0 22.1626 2.01415 24.1768 4.5 24.1768H19.5C21.9858 24.1768 24 22.1626 24 19.6768V4.67676C24 2.19091 21.9858 0.176758 19.5 0.176758ZM16.6154 11.2537H7.38462L3.69231 6.6383C3.69231 6.6383 6.46154 2.94599 12 2.94599C17.5385 2.94599 20.3077 6.6383 20.3077 6.6383L16.6154 11.2537Z"
                    fill="#DDDDDD"
                  ></path>
                  <path
                    d="M9.58351 10.3306L8.30769 4.79211L12 10.3306H9.58351Z"
                    fill="#DDDDDD"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0pohudenia">
                    <rect y="0.176758" width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="faq__tab-name">Похудение</div>
            </buttom>
            <buttom
              className={`faq__tab ${tab === 5 && 'faq__tab-active'}`}
              onClick={() => setTab(5)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clip-path="url(#clip0hrabenie)">
                  <path
                    d="M2.00073 10.7483V21.3197C2.00073 21.9509 2.51237 22.4626 3.14359 22.4626H4.28645V24.1769H6.00072V22.4626H16.2865V24.1769H18.0007V22.4626H19.1436C19.7748 22.4626 20.2864 21.9509 20.2864 21.3197V10.7483H2.00073ZM6.28642 17.8912H4.57215V13.3197H6.28642V17.8912Z"
                    fill="#DDDDDD"
                  ></path>
                  <path
                    d="M19.1436 0.176758H3.14359C2.51242 0.176758 2.00073 0.688398 2.00073 1.31962V9.03388H20.2864V1.31962C20.2865 0.688398 19.7748 0.176758 19.1436 0.176758ZM6.28647 7.03391H4.5722V3.60534H6.28647V7.03391Z"
                    fill="#DDDDDD"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0hrabenie">
                    <rect y="0.176758" width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="faq__tab-name">Хранение</div>
            </buttom>
          </div>
          <div className="faq__accordions">
            <div className={`faq__item ${tab === 1 && 'faq__item-active'}`}>
              <Accordion title="Как осуществляется доставка?" body={<HowDeliveryIsGoing />} />
              <Accordion title="Сколько стоит доставка?" body={<HowMuchDelivery />} />

              <Accordion
                title="Когда возможна первая доставка после оформления заказа?"
                body={<FirstDelivery />}
              />
              <Accordion
                title="Как быть, если я не смогу принять курьера в день доставки?"
                body={<CannotReceice />}
              />
              <Accordion
                title="Можно ли внести изменения в график доставок?"
                body={<MayIChageSchedule />}
              />
              <Accordion
                title="Сколько дней доставки я могу заморозить?"
                body={<FreezeDelivery />}
              />
            </div>
            <div className={`faq__item ${tab === 2 && 'faq__item-active'}`}>
              <Accordion
                title="Что такое здоровое питание и почему его важно соблюдать?"
                body={<HealthyNutrition />}
              />
              <Accordion title="Как мне узнать КБЖУ каждого блюда?" body={<KBGU />} />
              <Accordion
                title="Какие способы приготовления применяются на кухне?"
                body={<CookingMethods />}
              />
            </div>
            <div className={`faq__item ${tab === 3 && 'faq__item-active'}`}>
              <Accordion title="Какие продукты вы используете?" body={<WhatProducts />} />
              <Accordion
                title="Можно ли заменить определенный ингредиент?"
                body={<ChangeProduct />}
              />
            </div>
            <div className={`faq__item ${tab === 4 && 'faq__item-active'}`}>
              <Accordion
                title="Сколько калорий мне нужно потреблять в день, чтобы похудеть?"
                body={<HowManyCalories />}
              />
              <Accordion
                title="Как понять, что я худею на рационе от Level Kitchen?"
                body={<AmILoseWeight />}
              />
              <Accordion
                title="Какое количество приемов пищи считается наиболее оптимальным?"
                body={<HowManyMeals />}
              />
            </div>
            <div className={`faq__item ${tab === 5 && 'faq__item-active'}`}>
              <Accordion title="Каков срок годности вашей продукции?" body={<ExpirationDate />} />
              <Accordion
                title="Можно ли употреблять блюда без разогрева?"
                body={<MealWithoutWarming />}
              />
            </div>
          </div>
        </div>
        <div className="faq__order">
          <OrderSidebar />
        </div>
      </div>
    </div>
  );
}

export default Faq;
