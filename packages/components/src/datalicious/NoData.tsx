import React from 'react';
import { Dimensions } from 'react-native';
import R from 'components/src/res/R';
import styled from 'styled-components/native';

export function NoData() {
  return (
    <Container>
      <Title>{R.strings.NO_DATA}</Title>
      <Description>
        {R.strings.CLICK_BUTTON_ABOVE}
      </Description>
      <Image source={R.images.noitems20} />
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  position: relative;
  align-items: center;
  background: ${R.colors.white};
  height: 100%;
  padding: 50px;
`;
const aspect = 171 / 242;
const w = Dimensions.get('window').width - 140;
const h = w / aspect;
const Image = styled.Image`
  margin-top: 30px;
  width: ${w}px;
  height: ${h}px;
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
