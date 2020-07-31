import { getType, ActionType } from 'typesafe-actions';
import actions from './actions';
import { State } from './types';

export type Action = ActionType<typeof actions>;
export { State };

export const initialState: State = {
  dataSet: null,
  dataSetName: '',
  dataSetFileName: '',
  isFetchingData: false,
  fetchingDataError: '',
  didInvalidateData: false,
  dataPayload: '',
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {

    case getType(actions.fetchData.request): return {
      ...state,
      isFetchingData: true,
      fetchingDataError: '',
    }

    case getType(actions.fetchData.success): return {
      ...state,
      isFetchingData: false,
      didInvalidateData: false,
      dataSet: action.payload
    }

    case getType(actions.fetchData.failure): return {
      ...state,
      isFetchingData: false,
      didInvalidateData: false,
      fetchingDataError: action.payload,
    }

    case getType(actions.invalidateData): return {
      ...state,
      didInvalidateData: true,
      dataSet: null,
      dataSetName: '',
      dataSetFileName: '',
    }

    case getType(actions.setDataSetName): return {
      ...state,
      dataSetName: action.payload
    }

    case getType(actions.setDataInput): return {
      ...state,
      dataPayload: action.payload
    }

    case getType(actions.addToSet): {
      if (!state.dataSet) {
        return {
          ...state
        };
      }
      let arr = state.dataSet.slice();
      arr.push(action.payload);
      return {
        ...state,
        dataPayload: '',
        dataSet: arr,
      }
    }

    default: return state;
  }
}

export default reducer;
