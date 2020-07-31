/**
 * Redux state for Datalicious module
 */
export type State = {
  /**
   * Data Sets
   */
  dataSet: number[] | null;
  dataSetName: string;
  dataSetFileName: string;
  isFetchingData: boolean;
  fetchingDataError: string;
  didInvalidateData: boolean;
  dataPayload: string;
}

export type DataFileInfo = {
  fileName: string;
  dataSetName: string;
}

export type DataFileMap = {
  [key: string]: DataFileInfo
};
