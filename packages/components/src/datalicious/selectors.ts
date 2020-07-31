import { createSelector } from 'reselect';
import { RootState } from 'components/src/app/redux';
import { Maths } from 'components/src/datalicious/lib/Maths.class';

const getDataSet = (state: RootState) => state && state.datas && state.datas.dataSet;

export const selectMean = createSelector(
  getDataSet,
  (data): number | null => {
    try {
      if (!(data && data.length)) {
        return null;
      }
      const math = new Maths(data);

      return math.mean();

    } catch (error) {
      return null;
    }
  }
);

export const selectMedian = createSelector(
  getDataSet,
  (data): number | null => {
    try {
      if (!(data && data.length)) {
        return null;
      }
      const math = new Maths(data);

      return math.median();

    } catch (error) {
      return null;
    }
  }
);

export const selectMode = createSelector(
  getDataSet,
  (data): number[] | null => {
    try {
      if (!(data && data.length)) {
        return null;
      }
      const math = new Maths(data);

      return math.mode();

    } catch (error) {
      return null;
    }
  }
);

export const selectStdDev = createSelector(
  getDataSet,
  (data): number | null => {
    try {
      if (!(data && data.length)) {
        return null;
      }
      const math = new Maths(data);

      return math.stdDev();

    } catch (error) {
      return null;
    }
  }
);
