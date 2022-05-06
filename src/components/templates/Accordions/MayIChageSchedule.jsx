import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  margin-bottom: 20px;
`;

function MayIChageSchedule() {
  return (
    <div>
      <Text className="reg">
        Да, конечно! Только не забывай, что все изменения вносятся за сутки до 12 часов дня.
      </Text>
    </div>
  );
}

export default MayIChageSchedule;
