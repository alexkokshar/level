import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  margin-bottom: 20px;
`;

function HowManyMeals() {
  return (
    <div>
      <Text className="reg">
        Наши программы на похудение — “Снижение 750 ккал”, “Снижение 1000 ккал” и “Снижение 1500
        ккал” — являются наиболее оптимальными по количеству приемов пищи. 4-6-разовое питание
        грамотно распределено на весь день — мы рекомендуем употреблять блюда каждые 2,5-3 часа. Так
        ты сможешь всегда поддерживать суточные нормы КБЖУ.
      </Text>
      <Text className="reg">
        P.S. В программу "Снижение 750 ккал" рекомендуем добавлять салат, свежие фрукты или овощи, а
        также ориентироваться на свои параметры, образ жизни и желаемый вес. Так ты сможешь
        комфортно похудеть!
      </Text>
    </div>
  );
}

export default HowManyMeals;
