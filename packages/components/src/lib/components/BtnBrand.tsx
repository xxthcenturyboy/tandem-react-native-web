import React from 'react';
import R from 'components/src/res/R';
// import { DotIndicator } from 'react-native-indicators';
import styled from 'styled-components/native';


type Props = {
  handlePress: () => void;
  isFetching: boolean;
  disabled: boolean;
  isSelected: boolean;
  label: string;
  width?: number;
}

const btnBrand = ({ disabled, handlePress, isSelected, label, width }: Props): JSX.Element => {
  return (
    <Button
      disabled={disabled}
      onPress={handlePress}
      width={width ? width : 0}
      isSelected={isSelected}
    >
      <ButtonText
        isSelected={disabled}
      >
        {label}
      </ButtonText>
    </Button>
  );
}

const Button = styled.TouchableOpacity<{ isSelected: boolean, width: number }>`
  border-radius: 3px;
  margin-top: 20px;
  width: ${p => p.width ? p.width : 300}px;
  height: 50px;
  border-width: 0px;
  border-radius: 30px;
  margin: 20px 10px 0px;
  background-color: ${p => p.isSelected ? R.colors.blue : R.colors.aliceBlueDarker};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text<{ isSelected: boolean }>`
  color: ${p => p.isSelected ? R.colors.white : R.colors.white};
  font-size: 16px;
`;

export default btnBrand;