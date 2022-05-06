import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  margin-bottom: 30px;
`;

function FirstDelivery() {
  return (
    <div>
      <Text className="reg">
        При оформлении и подтверждении заказа до 12:00 часов дня доставка возможна на следующий
        день, после 12:00 — через день.
      </Text>
      <Text className="reg">
        ВАЖНО: заказ обязательно должен быть подтвержден менеджером по телефону, даже после его
        оплаты. Без согласования доставка невозможна.
      </Text>
    </div>
  );
}

export default FirstDelivery;
