import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import phone from 'lib/utils/device-info';
import R from 'res/R';


export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ScrollInner = styled.ScrollView`
  background-color: ${R.colors.white};
  width: 90%;
  max-height: 90%;
  display: flex;
`;

export const Inner = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-vertical: 30;
  padding-horizontal: 10;
`;

export const InnerNoScroll = styled.View`
  background-color: ${R.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-vertical: 30;
  padding-horizontal: 10;
  width: 90%;
  max-height: 90%;
`;

export const FeedbackField = styled.TextInput`
  height: 200;
  width: 90%;
  border-color: ${R.colors.gray};
  border-width: 1;
  border-radius: 5;
  font-size: 20px;
  color: ${R.colors.grayDark};
  padding-vertical: 10;
  padding-horizontal: 10;
  background-color: ${R.colors.grayLightest};
  margin-top: 10;
`;

export const Title = styled.Text`
  font-family: ${R.fonts.proximanova500};
  font-size: 30;
  color: ${R.colors.black};
  text-align: center;
  margin-bottom: 5;
  padding-horizontal: 10;
`;

export const RateTitle = styled.Text`
  font-family: ${R.fonts.proximanova500};
  font-size: 24;
  color: ${R.colors.black};
  text-align: center;
  margin-bottom: 5;
  padding-horizontal: 10;
`;

export const SubTitle = styled.Text`
  font-family: ${R.fonts.proximanova300};
  font-size: 18;
  color: ${R.colors.gray};
  text-align: center;
  margin: 0;
  padding-horizontal: 10;
  margin-bottom: 20;
`;

export const IntroImage = styled.Image.attrs({
  resizeMode: 'contain'
})`
  width: ${p => Dimensions.get('window').width - 60};
  margin-vertical: 10;
`;

export const CopyKeysCalloutView = styled.View`
  margin-vertical: 0;
  margin-top: 12;
  margin-horizontal: 14;
  background-color: ${R.colors.aliceBlue};
  border: 1px solid ${R.colors.aliceBlueDarker};
  border-radius: 4px;
  padding: 14px;
`;

export const CopyKeysCalloutText = styled.Text`
  font-family: ${R.fonts.proximanova500};
  font-size: 15;
  line-height: 22;
  padding-vertical: 0;
  color: ${R.colors.blueLight};
  text-align: left;
`;

export const CopyKeysCalloutTextBold = styled.Text`
  font-family: ${R.fonts.proximanova700};
  font-size: 15;
  line-height: 22;
  padding-vertical: 0;
  color: ${R.colors.blueLight};
  text-align: left;
  margin-top: 20;
`;

export const CopyingKeysView = styled.View`
  margin-vertical: 0;
  margin-horizontal: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${R.colors.aliceBlue};
  border: 1px solid ${R.colors.aliceBlueDarker};
  border-radius: 3px;
  padding: 8px;
  width: 275px;
`;

export const Description = styled.Text`
  font-family: ${R.fonts.proximanova300};
  font-size: 14;
  color: ${R.colors.grayDarkest};
  line-height: 20;
  padding-horizontal: 20;
  margin-bottom: 20;
  text-align: justify;
`;

export const BtnTOS = styled.TouchableHighlight<{ disabled: boolean }>`
  margin-top: -10;
`;

export const BtnTOSText = styled.Text`
  font-family: ${R.fonts.proximanova500};
  font-size: 18;
  color: ${R.colors.grayDarkest};
  text-align: center;
`;

export const BtnDismiss = styled.TouchableHighlight<{ disabled: boolean }>`
  margin-top: 20;
`;

export const BtnDismissText = styled.Text`
  font-family: ${R.fonts.proximanova500};
  font-size: 18;
  color: ${R.colors.grayDarkest};
  text-align: center;
`;

export const AgreeWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 15;
  padding-vertical: 10;
  padding-horizontal: 20;
`;

export const AgreeText = styled.Text`
  font-family: ${R.fonts.proximanova700};
  font-size: 14;
  color: ${R.colors.grayDarkest};
  text-align: left;
  margin-horizontal: 10;
`;

export const BtnContainer = styled.View`
  background-color: ${R.colors.white};
  align-items: center;
  justify-content: center;
  padding-bottom: 35;
`;

export const BtnInlineContainer = styled.View`
  background-color: ${R.colors.white};
  width: 100%;
  align-content: space-around;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const ExtWV = {
  InnerNoScroll: styled.View`
    background-color: ${R.colors.white};
    margin: 0;
    width: 100%;
    height: 95%;
    top: 5%;
`,
  Title: styled.Text`
    background-color: ${R.colors.white};
    font-family: ${R.fonts.proximanova700};
    font-size: 16;
    color: ${R.colors.brand.lightBlue};
    text-align: center;
    padding-top: 15;
    padding-bottom: 15;
  `,
  SubContainer: styled.View`
    background-color: ${R.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
};

export const BackWrapper = styled.TouchableOpacity`
  display: flex;
  position: absolute;
  top: ${phone.isIphoneX ? 50 : 20};
  right: 20;
  padding-top: 10;
  padding-left: 10;
  padding-bottom: 10;
  padding-right: 10;
`;
export const Back = styled.Text`
  color: ${R.colors.white};
  font-size: 18;
  font-family: ${R.fonts.proximanova700};
`;
