import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  margin-bottom: 20px;
`;

function HowManyCalories() {
  return (
    <div>
      <Text className="reg">
        Суточная норма калорийности зависит от антропометрических данных каждого человека (возраст,
        рост, вес текущий и желаемый) и его образа жизни (спорт/без спорта).
      </Text>
      <Text className="reg">
        Рационов по похудению много, но самыми оптимальными являются наши программы питания, которые
        составлены таким образом, что ты не будешь испытывать голод и при этом сможешь избавиться от
        лишних килограммов.
      </Text>
      <Text className="reg">
        Программа “Снижение 750 ккал” предназначена для экстренного снижения веса: за 1 неделю ты
        сможешь похудеть на 5 кг, за 2 недели — на 7 кг, за месяц — на 10 кг. В ней преобладает
        белковая пища, которая насыщает организм, ускоряет обменные процессы и сжигает жировые
        клетки при сохранении мышечной массы. В рационе практически полностью отсутствуют простые
        углеводы, что благоприятно влияет на похудение. Программа рассчитана на 4 приема пищи в
        день.
      </Text>
      <Text className="reg">
        Программа “Снижение 1000 ккал” идеально подходит тем, кто хочет похудеть в короткие сроки. В
        ней предусмотрено 5 приемов пищи в день. Результат — до -5 кг в месяц. Рекомендована по
        большей части для девушек со средним весом 55-70 кг.
      </Text>
      <Text className="reg">
        Программа “Снижение 1500 ккал” является универсальной и поможет похудеть мужчинам и
        женщинам. Взрослая девушка при среднем весе 65-80 кг сможет похудеть на 5 кг в месяц, а
        мужчина при среднем весе 70-90 кг — до 7 кг в месяц. В программе особое внимание уделено
        белковой пище с поддержанием оптимальных значений жиров и углеводов. В ней предусмотрено 6
        приемов пищи в день.
      </Text>
      <Text className="reg">
        Программа Detox идеально подходит для начала похудения. Рацион на 2 дня состоит из 16
        бутылочек натуральных смузи и соков без добавления сахара. За это время ты сможешь сбросить
        до 2 кг лишнего веса. Программа улучшает работу пищеварения и дарит чувство легкости.
      </Text>
    </div>
  );
}

export default HowManyCalories;
