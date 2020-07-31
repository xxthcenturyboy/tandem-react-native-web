import React from 'react';
import R from 'res/R';
import { DotIndicator } from 'react-native-indicators';
import styled from 'styled-components/native';


type Props = {
  handlePress: () => void;
  isFetching: boolean;
  disabled: boolean;
  label: string;
  width?: number;
}

const btnBlack = ({ disabled, handlePress, isFetching, label, width }: Props): JSX.Element => {
  return (
    <Button
      disabled={disabled}
      onPress={handlePress}
      width={width ? width : 0}
    >
      {isFetching ?
        <DotIndicator color={R.colors.gray} count={3} size={12} /> :
        <ButtonText
          disabled={disabled}
        >
          {label}
        </ButtonText>
      }
    </Button>
  );
}

const Button = styled.TouchableOpacity<{ disabled: boolean, width: number }>`
  border-radius: 3;
  margin-top: 20;
  width: ${p => p.width ? p.width : 300};
  height: 50;
  border-width: 0;
  background-color: ${R.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text<{ disabled: boolean }>`
  color: ${p => p.disabled ? R.colors.grayDarker : R.colors.black };
  font-family: ${R.fonts.proximanova700};
  font-size: 17;
`;

export default btnBlack;