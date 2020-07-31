import {
  Alert,
} from 'react-native';
import R from 'res/R';

interface Props {
  alertTitle?: string;
  msg: string;
  button1Text?: string;
  button2Text?: string;
  button1Func: () => void;
  button2Func?: () => void;
}

/**
 * Displays a generic Alert modal
 * Accepts title?, msg, button1Func (confirm), button1Text, button2Func? (cancel), button2Text
 */
const Alerts = (props: Props): void => {
  const {
    alertTitle,
    msg,
    button1Text,
    button2Text,
    button1Func,
    button2Func,
  } = props;

  const title = alertTitle && alertTitle !== undefined ? alertTitle : R.strings.ALERT;
  const btn1Text = button1Text ? button1Text : R.strings.OK;

  if (button2Func && button2Text) {
    return Alert.alert(
      title,
      msg,
      [
        { text: btn1Text, onPress: button1Func },
        { text: button2Text, onPress: button2Func }
      ]
    )
  }
  Alert.alert(
    title,
    msg,
    [
      { text: btn1Text, onPress: button1Func }
    ]
  );
}

export default Alerts;