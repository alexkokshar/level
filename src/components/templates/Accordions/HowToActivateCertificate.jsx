import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  margin-bottom: 20px;
`;

function HowToActivateCertificate() {
  return (
    <div>
      <Text className="reg">Все очень просто.</Text>
      <Text className="reg">
        1. Зайди на сайт или в приложение Level Kitchen и выбери программу питания, указанную в
        сертификате.
      </Text>
      <Text className="reg">2. Затем выбери нужную калорийность и длительность программы.</Text>
      <Text className="reg">
        3. На странице оформления заказа в поле «Промокод» введи номер сертификата.
      </Text>
      <Text className="reg">
        4. Если номинал сертификата превышает стоимость программы питания, разница вернется бонусами
        на счет заказчика. В дальнейшем бонусами можно будет оплатить до 50% стоимости следующего
        заказа.
      </Text>
      <Text className="reg">
        Или можешь позвонить по телефону 8 (800) 775-85-49 и мы поможем активировать сертификат
      </Text>
    </div>
  );
}

export default HowToActivateCertificate;
