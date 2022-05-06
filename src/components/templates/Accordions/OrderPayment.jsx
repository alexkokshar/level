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

function OrderPayment() {
  return (
    <div>
      <Text>
        Компания Level Kitchen предлагает своим клиентам два варианта оплаты готового питания:
      </Text>
      <Title>Наличными курьеру</Title>
      <Text>
        Оговоренную сумму можно отдать сотруднику компании, который осуществляет доставку еды на
        дом;
      </Text>
      <Title>Онлайн</Title>
      <Text>
        Оплата через авторизационный сервер Процессингового центра Банка с использованием банковских
        кредитных карт следующих платежных систем: VISA International, MasterCard Worldwide
      </Text>
    </div>
  );
}

export default OrderPayment;
