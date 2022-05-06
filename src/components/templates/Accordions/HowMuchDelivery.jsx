import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  margin-bottom: 30px;
`;

const Elem = styled.li`
  margin-bottom: 5px;
  list-style-type: disc;
`;

function HowMuchDelivery() {
  return (
    <div>
      <Text className="reg">Доставка осуществляется бесплатно:</Text>
      <ul>
        <Elem className="reg">Москва и МО — до 100 км от МКАД;</Elem>
        <Elem className="reg">Санкт-Петербург — до 50 км от КАД,</Elem>
        <Elem className="reg">Екатеринбург — до 50 км от ЕКАД;</Elem>
        <Elem className="reg">Краснодар — по городу + пригород до 50 км;</Elem>
        <Elem className="reg">Челябинск — по городу + пригород до 25 км;</Elem>
        <Elem className="reg">Нижний Новгород — по городу + пригород до 25 км;</Elem>
        <Elem className="reg">Ростов-на-Дону — по городу + пригород до 25 км;</Elem>
        <Elem className="reg">
          Ярославль, Владимир, Калуга, Рязань, Тула, Тверь, Сочи, Анапа, Геленджик, Новороссийск –
          по городу.
        </Elem>
      </ul>
    </div>
  );
}

export default HowMuchDelivery;
