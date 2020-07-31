import { createAction } from 'typesafe-actions';
import { AppStateStatus } from 'react-native';

export default createAction('APP:SET_APP_STATE')<AppStateStatus | null>();
