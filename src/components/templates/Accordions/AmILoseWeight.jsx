import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  margin-bottom: 20px;
`;

function AmILoseWeight() {
  return (
    <div>
      <Text className="reg">
        Постарайся не зацикливаться на килограммах, которые показывают весы. Обрати внимание на
        замеры своего тела (до/после) и ориентируйся на отражении в зеркале и свое самочувствие. Еще
        один эффективный способ — примерка любимых вещей. Например, джинсы, которые ты уже год не
        можешь носить, лучше всяких весов «расскажут», что процесс похудения запущен.
      </Text>
      <Text className="reg">
        Не стоит забывать также и том, что при наличии высокоинтенсивных силовых тренировок мышцы
        вместе с правильным питанием приходят в тонус, соответственно, начинают заполняться и расти,
        то есть становятся тяжелее. Таким образом, на первых порах вес может даже увеличиться за
        счет роста объема мышечной массы.
      </Text>
      <Text className="reg">
        В программах “Detox”, “Снижение 750 ккал”, “Снижение 1000 ккал” и “Снижение 1500 ккал”
        учтены все нюансы профессиональными диетологами, которые знают все о правильном питании для
        достижения результата.
      </Text>
    </div>
  );
}

export default AmILoseWeight;
