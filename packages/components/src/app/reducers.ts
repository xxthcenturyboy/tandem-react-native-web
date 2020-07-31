import { getType, ActionType } from 'typesafe-actions';
import actions from './actions';
import { State } from './types';

export type Action = ActionType<typeof actions>;
export { State };

export const initialState: State = {
  appState: null,
  isKeyboardOpen: false,
  appKey: 0,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case getType(actions.setAppState): return {
      ...state,
      appState: action.payload
    };

    case getType(actions.setKeyboardOpen): return {
      ...state,
      isKeyboardOpen: action.payload
    }

    case getType(actions.remountApp): return {
      ...state,
      appKey: state.appKey + 1,
    }

    default: return state;
  }
}

export default reducer;
