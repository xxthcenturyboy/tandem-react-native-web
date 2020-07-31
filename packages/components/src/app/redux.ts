import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { ActionType } from 'typesafe-actions';
import thunk from 'redux-thunk';

import appReducer, { initialState as initialAppState, State as AppState, Action as AppAction } from './reducers';
import dataReducer, { initialState as initialDataState, State as DataState, Action as DataAction } from 'components/src/datalicious/reducers';

/**
 * Actions
 */
export type RootAction =
  | AppAction
  | DataAction;

/**
 * State
 */
export interface RootState {
  app: AppState;
  datas: DataState;
}

/**
 * Define initial state
 */
const initialState: RootState = {
  app: initialAppState,
  datas: initialDataState,
};

/**
 * Reducers
 */
export const reducers = {
  app: appReducer,
  datas: dataReducer,
};

/**
 * Create root reducer
 */
const allReducers = combineReducers(reducers);

const rootReducer = (state: RootState, action: RootAction) => {
  if (action.type === 'APP:SET_APP_STATE') {
    state = initialState;
  }

  return allReducers(state, action);
}

/**
 * Redux middlewares
 */
const middlewares = applyMiddleware(
  thunk
);

/**
 * Create store
 */
let appStore;

if (__DEV__) {
  // @ts-ignore
  const w = window as any;
  const composeEnhancer: typeof compose = w && w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
  // @ts-ignore
  appStore = createStore(rootReducer, initialState, composeEnhancer(middlewares));
} else {
  // @ts-ignore
  appStore = createStore(rootReducer, initialState, middlewares);
}
export const store = appStore;
