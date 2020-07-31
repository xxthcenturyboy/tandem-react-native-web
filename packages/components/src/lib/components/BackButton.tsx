import React from 'react';
import styled from 'styled-components/native';
import Navigation from 'lib/services/NavigationService';
import phone from 'lib/utils/device-info';
import R from 'res/R';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { TouchableWithoutFeedbackProps } from 'react-native';


const Button = styled.TouchableHighlight.attrs({
  underlayColor: 'white'
})`
  display: flex;
  position: absolute;
  top: ${phone.isIphoneX ? 40 : 10};
  left: 0;
  padding-horizontal: 20;
  padding-vertical: 20;
  z-index: 2;
`;
const Wrapper = styled.View``;

export default function BackButton(props: TouchableWithoutFeedbackProps & { color?: string; }) {
  return (
    <Button {...props}>
      <Wrapper>
        <MaterialIcon 
          name="chevron-left" 
          size={30} 
          color={props.color || R.colors.grayDark}
          style={{
            top: -3
          }}
        />
      </Wrapper>
    </Button>
  )
};