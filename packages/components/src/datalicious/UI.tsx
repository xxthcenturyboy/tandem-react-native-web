import styled from 'styled-components/native';
import R from 'components/src/res/R';

export const Container = styled.ScrollView`
  background-color: ${R.colors.white};
`;

export const Header = styled.View`
  position: absolute;
  right: 0;
`;

export const HeaderText = styled.Text`
  color: ${R.colors.gray};
  font-size: 12px;
  font-weight: 600;
  padding: 4px;
  padding-right: 12px;
  text-align: right;
`;

export const Body = styled.View`
  background-color: ${R.colors.white};
`;

export const Section = styled.View`
  margin-top: 32px;
  padding-horizontal: 24px;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${R.colors.black};
`;

export const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${R.colors.gray};
`;

export const Highlight = styled.Text`
  font-weight: 700;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200;
  background-color: ${R.colors.blueLight}
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: 600;
  color: ${R.colors.white};
`;

export const ButtonRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ResultsColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content-center;
  margin-top: 20px;
`;

export const SelectedSet = styled.View`
  display: flex;
  align-items: center;
  justify-content-center;
  padding: 24px;
  background: ${R.colors.white};
  border-radius: 5px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 1};
  shadow-opacity: 0.5;
  shadow-radius: 1px;
  elevation: 1;
  margin: 5px;
  width: 250px;
`;

export const SelectedText = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

export const ResultLabel = styled.Text`
  display: flex;
  align-self: flex-start;
`;

export const ResultData = styled.Text`
  display: flex;
  align-self: flex-end;
  margin-top: -18px;
  color: ${R.colors.blue};
`;

export const DataInputContainer = styled.View`
  margin-bottom: 20px;
`;

export const DataInputSubmit = styled.TouchableOpacity<{ disabled: boolean }>`
  margin: 10px 0px 0px;
  text-align: center;
  padding: 15px;
  border-radius: 40px;
  background-color: ${p => p.disabled ? R.colors.grayLight : R.colors.black};
`;

export const DataInputSubmitLabel = styled.Text`
  color: ${R.colors.grayLighter};
  text-align: center;
`;

export const DataInput = styled.TextInput.attrs({
  placeholderTextColor: R.colors.gray
})`
  border-color: ${R.colors.grayLight};
  border-width: 1px;
  border-radius: 3px;
  width: 250px;
  font-size: 18px;
  padding: 10px;
  border-radius: 3px;
  margin: 20px 0px 0px;
  text-align: center;
  color: ${R.colors.black};
`;
