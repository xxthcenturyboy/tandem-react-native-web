import React from 'react';
import styled from 'styled-components/native';
import R from 'res/R';

type Props = {
  message: string;
}

/**
 * General component for showing info/warning/error notices
 */
function Notice({
  message
}: Props) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}

const Container = styled.View`
  border-radius: 3;
  border-color: ${R.colors.aliceBlueDarker};
  border-width: 1;
  background-color: ${R.colors.aliceBlue};
  padding-vertical: 10;
  padding-horizontal: 10;
  margin-horizontal: 10;
  margin-top: 20;
`;
const Message = styled.Text`
  color: ${R.colors.blueLight};
  font-size: 12;
`;

export default Notice