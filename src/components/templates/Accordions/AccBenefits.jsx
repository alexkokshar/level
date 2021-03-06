import React from 'react';
import styled from 'styled-components';

const Elem = styled.li`
  font-size: 14px;
  font-family: HelveticaRegular, Arial, Helvetica, sans-serif;
  line-height: 1.5;
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

function AccBenefits() {
  return (
    <div>
      <ul>
        <Elem>
          В компании Level Kitchen при приготовлении диетической еды используются только свежие
          продукты. Так как еда занимает важное место в жизни людей и влияет на состояние здоровья,
          компания отказалась от замороженных продуктов, сделав выбор в пользу свежих. С Level
          Kitchen заказать правильное питание становится проще.
        </Elem>
        <Elem>
          Все программы отличаются большим ассортиментом блюд, чьи вкус и качество остаются на
          высоте. В создании меню участвовали лучшие шеф-повара, диетологи и известный
          профессиональный спортсмен — Денис Гусев. Такой подход позволяет организовывать правильное
          питание, которое может быть не только вкусным, но и полезным.
        </Elem>
        <Elem>
          Программы компании составлены командой опытных и высококвалифицированных диетологов с
          точным расчетом необходимого количества калорий и питательных элементов. В меню включены
          разнообразные диетические блюда, которые многим придутся по вкусу. Здоровое питание с
          доставкой на дом — это не просто прием недельного или двухдневного рациона, а получение
          меню с подсчитанными калориями, белками, жирами и углеводами (КБЖУ) для каждого блюда и
          фирменных столовых приборов, выполненных в стильном черном цвете. Заказывая еду в Level
          Kitchen, вы сможете постоянно контролировать порции съеденной пищи. Это помогает
          поддерживать спортивную форму ежедневно.
        </Elem>
        <Elem>
          Компании Level Kitchen доверяют профессиональные спортсмены и другие известные личности.
          Частью команды уже стали Мария Голодковская, Надежда Карпова, Анфиса Васильева. Всем
          спортсменам готовая здоровая еда от Level Kitchen помогает добиваться поставленных целей и
          поддерживать физическую форму. Они оставили положительные отзывы о компании.
        </Elem>
      </ul>
    </div>
  );
}

export default AccBenefits;
