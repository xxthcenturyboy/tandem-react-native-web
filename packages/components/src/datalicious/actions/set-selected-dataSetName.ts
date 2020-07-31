import { createAction } from 'typesafe-actions';

const type = 'DATALICIOUS:SET_SELECTED_DATA_SET_NAME';

export default createAction(type)<string>();