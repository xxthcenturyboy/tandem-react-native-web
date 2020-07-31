/**
 * This function is called when the app first loads. It listens to certain
 * react-native events and syncs it to the redux store so that it can be
 * easily accessed from any components. For example, we can tell if the keyboard
 * is open without adding multiple listeners in each component.
 */
import { store } from 'components/src/app/redux';
import { Keyboard } from 'react-native';
import actions from 'components/src/app/actions';

export default function() {
  const openListener = Keyboard.addListener(
    'keyboardWillShow',
    () => store.dispatch(actions.setKeyboardOpen(true))
  );
  const closeListener = Keyboard.addListener(
    'keyboardDidHide',
    () => store.dispatch(actions.setKeyboardOpen(false))
  );
}