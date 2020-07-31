import React from 'react';
import styled from 'styled-components/native';

type Props = {
  title: string;
  body: string;
}

export default function Toast(props: Props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Body>{props.body}</Body>
    </Container>
  )
}

const Container = styled.TouchableOpacity``;
const Title = styled.Text``;
const Body = styled.Text``;