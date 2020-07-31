import { createAction } from 'typesafe-actions';

const type = 'DATALICIOUS:ADD_TO_SET';

export default createAction(type)<number>();
