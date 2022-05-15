import React, { useContext } from 'react';

import { ModalContext } from '../../../App';
import './PriceTable.scss';

function PriceTable() {
  const { setIsModalOpen } = useContext(ModalContext);

  const openModal = (e) => {
    if (e.target.closest('.price__order')) setIsModalOpen(true);
  };

  return (
    <section className="price">
      <h1 className="price__title title">Прайс</h1>

      <div className="price__table">
        <table>
          <thead>
            <tr>
              <th>Программа</th>
              <th>в день</th>
              <th>2 дня</th>
              <th>4 дня</th>
              <th>5 дней</th>
              <th>6 дней</th>
              <th>12 дней</th>
              <th>20 дней</th>
              <th>24 дня</th>
              <th>30 дней</th>
            </tr>
          </thead>
          <tbody onClick={openModal}>
            <tr>
              <td>Снижение 750 ккал</td>
              <td>4 блюда</td>
              <td className="price__order">
                <div>2 000 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>3 900 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>5 100 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>5 400 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>10 600 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>18 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>20 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>25 500 ₽</div>
                <div>Заказать</div>
              </td>
            </tr>
            <tr>
              <td>Снижение 1000 ккал</td>
              <td>5 блюд</td>
              <td className="price__order">
                <div>2 100 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>4 100 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>5 500 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>6 100 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>11 900 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>20 500 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>23 000 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>27 000 ₽</div>
                <div>Заказать</div>
              </td>
            </tr>
            <tr>
              <td>Снижение 1500 ккал</td>
              <td>6 блюд</td>
              <td className="price__order">
                <div>2 200 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>4 300 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>5 800 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>6 400 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>12 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>21 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>24 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>30 000 ₽</div>
                <div>Заказать</div>
              </td>
            </tr>
            <tr>
              <td>Баланс 2000 ккал</td>
              <td>6 блюд</td>
              <td className="price__order">
                <div>2 300 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>4 500 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>6 200 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>6 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>13 300 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>22 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>26 100 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>31 500 ₽</div>
                <div>Заказать</div>
              </td>
            </tr>
            <tr>
              <td>Набор 2500 ккал</td>
              <td>7 блюд</td>
              <td className="price__order">
                <div>2 400 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>4 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>6 400 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>6 900 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>13 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>23 800 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>27 200 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>33 000 ₽</div>
                <div>Заказать</div>
              </td>
            </tr>
            <tr>
              <td>Набор 3500 ккал</td>
              <td>7 блюд</td>
              <td className="price__order">
                <div>2 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>5 200 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>7 000 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>7 700 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>15 000 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>25 900 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>29 300 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>36 000 ₽</div>
                <div>Заказать</div>
              </td>
            </tr>
            <tr>
              <td>Detox</td>
              <td>8 напитков</td>
              <td className="price__order">
                <div>4 000 ₽</div>
                <div>Заказать</div>
              </td>
              <td className="price__order">
                <div>8 000 ₽</div>
                <div>Заказать</div>
              </td>
              <td>
                <div>-</div>
                <div></div>
              </td>
              <td>
                <div>-</div>
                <div></div>
              </td>
              <td>
                <div>-</div>
                <div></div>
              </td>
              <td>
                <div>-</div>
                <div></div>
              </td>
              <td>
                <div>-</div>
                <div></div>
              </td>
              <td>
                <div>-</div>
                <div></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PriceTable;
