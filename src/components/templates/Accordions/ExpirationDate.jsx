import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  margin-bottom: 20px;
`;

function ExpirationDate() {
  return (
    <div>
      <Text className="reg">
        Все блюда мы готовим исключительно из натуральных ингредиентов, поэтому срок годности блюд —
        48 часов.
      </Text>
      <Text className="reg">
        Рекомендуем хранить боксы с едой в холодильнике при соблюдении температурного режима и
        герметичности упаковки. Не забывай соблюдать последовательность приемов пищи, отмеченной на
        упаковке.
      </Text>
    </div>
  );
}

export default ExpirationDate;
