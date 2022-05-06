import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  font-weight: 400;
  margin-top: 20px;
  line-height: 1.5;
  font-family: HelveticaRegular, Arial, Helvetica, sans-serif;
  &:first-child {
    margin-top: 0;
  }
`;

const Title = styled.div`
  margin-top: 40px;
  &:first-child {
    margin-top: 0;
  }
`;

function DeliveryTerms() {
  return (
    <div>
      <Title>Как часто осуществляется привоз питания</Title>
      <Text>
        Компания предлагает только свежие фитнес-обеды, поэтому срок их хранения в охлажденном виде
        составляет не более 48 часов. В связи с этим доставка готовых наборов еды осуществляется по
        утрам раз в два дня. При заказе услуги на неделю и более возможна доставка в фиксированные
        дни: понедельник, среду и пятницу.
      </Text>
      <Title>Что делать, если нет возможности в установленный день получить рацион</Title>
      <Text>
        Компания предусматривает возможность заморозить доставочные дни. Если клиента нет в городе
        или он не может забрать заказ, доставка переносится на другой день. Заморозка
        распространяется на срок от 4 до 14 дней. Услуга доступна для заказов сроком от 12 дней и
        более.
      </Text>
      <Title>В какое время осуществляется доставка</Title>
      <Text>
        Привоз готовых блюд производится по утрам в период с 6:00 до 12:00 службой доставки
        компании. В это время необходимо выбрать двухчасовой интервал (например, с 6:00 до 8:00 или
        с 9:00 до 11:00), в течение которого курьер доставит заказ.
      </Text>
      <Text>
        При заказе рациона на 5 или 20 дней, доставка осуществляется строго по будням: в понедельник
        и среду — с рационом на 2 дня, а в пятницу — с рационом на 1 день (выходные исключены).
      </Text>
      <Title>В каком виде приходит заказ</Title>
      <Text>
        Здоровую еду и напитки необходимо употреблять каждый день. По этой причине заказы
        доставляются порционно в специальных фирменных контейнерах или бутылочках (касается
        программы Detox). Количество блюд зависит от рациона и суточной калорийности.
      </Text>
      <Title>На какой срок доступна услуга</Title>
      <Text>
        Готовое питание можно заказать как на два дня (минимальный заказ), так и на месяц. Более
        подробную информацию можно получить на страницах программ и у менеджера по телефону.
      </Text>
      <Title>Где осуществляется доставка</Title>
      <Text>
        Компания Level Kitchen на текущий момент работает на территории семнадцати городов. Доставка
        рациона осуществляется в их пределах. (см. карту).
      </Text>
      <Title>Сколько стоит доставка</Title>
      <Text>Доставка осуществляется бесплатно в черте города + 100 км (см. карту)</Text>
    </div>
  );
}

export default DeliveryTerms;
