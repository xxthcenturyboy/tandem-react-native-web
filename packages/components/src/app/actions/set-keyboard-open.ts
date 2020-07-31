import { createAction } from 'typesafe-actions';

const SET_KEYBOARD_OPEN: 'APP:SET_KEYBOARD_OPEN' = 'APP:SET_KEYBOARD_OPEN';

export const setKeyboardOpen = createAction(SET_KEYBOARD_OPEN)<boolean>();
