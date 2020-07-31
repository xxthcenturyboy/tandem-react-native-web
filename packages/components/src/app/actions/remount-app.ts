import { createAction } from 'typesafe-actions';

const REMOUNT_APP: 'APP:REMOUNT_APP' = 'APP:REMOUNT_APP';

export const remountApp = createAction(REMOUNT_APP)<undefined>();
