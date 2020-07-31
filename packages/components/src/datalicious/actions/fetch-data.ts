import { createAsyncAction } from 'typesafe-actions';
import { Dispatch } from 'redux';
import { DataFiles } from 'components/src/datalicious/lib/file-enum';
import { data as data1234 } from 'components/src/datalicious/lib/mock/data-1234.json';
import { data as data4321 } from 'components/src/datalicious/lib/mock/data-4321.json';

export const fetchData = createAsyncAction(
  'DATALICIOUS:FETCH_DATA',
  'DATALICIOUS:FETCH_DATA_SUCCESS',
  'DATALICIOUS:FETCH_DATA_FAILURE'
)<undefined, number[], string>();

const fetchDataSet = (dataFile: DataFiles) => async (dispatch: Dispatch) => {
  if (!dataFile) {
    return;
  }
  try {
  dispatch(fetchData.request());

  if (dataFile === DataFiles.DATA1234) {
    return dispatch(fetchData.success(data1234));
  }

  if (dataFile === DataFiles.DATA4321) {
    return dispatch(fetchData.success(data4321));
  }

  } catch (err) {
    dispatch(fetchData.failure(err.message || err));
  }
};

export default fetchDataSet;
