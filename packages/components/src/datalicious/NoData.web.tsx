import React from 'react';
import R from 'components/src/res/R';
import styled from 'styled-components/native';

export function NoData() {
  return (
    <Container>
      <Title>{R.strings.NO_DATA}</Title>
      <Description>
        {R.strings.CLICK_BUTTON_ABOVE}
      </Description>
      <Image source={R.images.noitems} />
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  position: relative;
  align-items: center;
  background: ${R.colors.white};
  height: 100%;
  padding: 40px;
`;
const Image = styled.Image`
  margin-top: 30px;
  width: 171px;
  height: 242px;
`;
const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  color: ${R.colors.blueDark};
`;
const Description = styled.Text`
  text-align: center;
  font-size: 14px;
  color: ${R.colors.blueDark};
  margin-top: 15px;
`;