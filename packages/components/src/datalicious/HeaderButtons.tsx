import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { RootState } from 'components/src/app/redux';
import { useDispatch, useSelector } from 'react-redux';
import { DataFileMap } from 'components/src/datalicious/types';
import fetchData from 'components/src/datalicious/actions/fetch-data';
import invalidateData from 'components/src/datalicious/actions/invalidate-data';
import setDataSetName from 'components/src/datalicious/actions/set-selected-dataSetName';
import { DataFiles } from 'components/src/datalicious/lib/file-enum';
import ButtonBrand from 'components/src/lib/components/BtnBrand';
import * as UI from './UI';

export function HeaderButtons() {
  const dataSetName = useSelector((state: RootState) => state.datas.dataSetName);
  const isFetching = useSelector((state: RootState) => state.datas.isFetchingData);
  const dispatch = useDispatch();

  const dataFileMeta: DataFileMap = {
    [DataFiles.DATA1234]: {
      fileName: 'data1234',
      dataSetName: '1234'
    },
    [DataFiles.DATA4321]: {
      fileName: 'data4321',
      dataSetName: '4321'
    }
  };

  const resetData = async (): Promise<void> => {
    try {
      await dispatch(invalidateData());
    } catch (err) {
      console.log(err);
    }
  }

  const isLoaded = (dataFile: DataFiles): boolean => {
    const newDataSetName = dataFileMeta[dataFile].dataSetName;
    return newDataSetName === dataSetName;
  }

  const loadDataSet = async (dataFile: DataFiles): Promise<void> => {
    try {
      if (isLoaded(dataFile)) {
        resetData();
        return;
      }
      await dispatch(fetchData(dataFile));
      dispatch(setDataSetName(dataFileMeta[dataFile].dataSetName))
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <UI.ButtonRow>
      <ButtonBrand
        handlePress={() => loadDataSet(DataFiles.DATA1234)}
        disabled={false}
        isSelected={dataSetName === dataFileMeta[DataFiles.DATA1234].dataSetName}
        isFetching={isFetching}
        label={dataFileMeta[DataFiles.DATA1234].dataSetName}
        width={100}
      />
      <ButtonBrand
        handlePress={() => loadDataSet(DataFiles.DATA4321)}
        disabled={false}
        isSelected={dataSetName === dataFileMeta[DataFiles.DATA4321].dataSetName}
        isFetching={isFetching}
        label={dataFileMeta[DataFiles.DATA4321].dataSetName}
        width={100}
      />

    </UI.ButtonRow>
  );
};
