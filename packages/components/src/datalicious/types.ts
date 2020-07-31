/**
 * Redux state for Datalicious module
 */
export type State = {
  /**
   * Data Sets
   */
  dataSet: DataSet | null;
  dataSetName: string;
  dataSetFileName: string;
  isFetchingData: boolean;
  fetchingDataError: string;
  didInvalidateData: boolean;
  dataPayload: string;
}

/**
 * Payload
 */
export type DataSet = number[];

export type DataFileInfo = {
  fileName: string;
  dataSetName: string;
}

export type DataFileMap = {
  [key: string]: DataFileInfo
};
