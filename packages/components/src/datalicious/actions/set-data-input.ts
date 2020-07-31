import { createAction } from 'typesafe-actions';

const type = 'DATALICIOUS:SET_DATA_INPUT';

export default createAction(type)<string>();