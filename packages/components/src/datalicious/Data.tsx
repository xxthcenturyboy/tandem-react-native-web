import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { RootState, RootAction } from 'components/src/app/redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  selectMean,
  selectMedian,
  selectMode,
  selectStdDev,
} from 'components/src/datalicious/selectors';
import { NoData } from 'components/src/datalicious/NoData';
import { HeaderButtons } from 'components/src/datalicious/HeaderButtons';
import setDataInput from 'components/src/datalicious/actions/set-data-input';
import addToSet from 'components/src/datalicious/actions/add-data';
import numeral from 'numeral';
import * as UI from './UI';
import R from 'components/src/res/R';

type Props = {
} & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;
type State = {
}

class Datalicous extends React.Component<Props, State> {

  numberFormat = '0,0.000000'

  componentDidMount() {
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
  }

  renderDataInput(): JSX.Element {
    const { dataPayload, setDataInput, addToSet } = this.props;
    return (
      <UI.DataInputContainer>
        <UI.DataInput
          placeholder={R.strings.ADD_TO_SET}
          keyboardType="phone-pad"
          value={dataPayload}
          onChangeText={(text) => setDataInput(text)}
        />
        <UI.DataInputSubmit
          onPress={() => addToSet(Number(dataPayload))}
          disabled={!dataPayload}
        >
          <UI.DataInputSubmitLabel>{R.strings.ADD_TO_SET}</UI.DataInputSubmitLabel>
        </UI.DataInputSubmit>
      </UI.DataInputContainer>
    );
  }

  render(): JSX.Element {
    const { data, dataSetName, mean, median, mode, stdDev } = this.props;

    return (
      <>
        <HeaderButtons />
        {!data && <NoData />}
        {data &&
          <UI.ResultsColumn>
            {this.renderDataInput()}
            <UI.SelectedSet>
              <UI.SelectedText>{`${R.strings.DATA_FOR} ${dataSetName}`}</UI.SelectedText>
            </UI.SelectedSet>
            <UI.SelectedSet>
              <UI.ResultLabel>{R.strings.MEAN}</UI.ResultLabel>
              <UI.ResultData>{numeral(mean).format(this.numberFormat)}</UI.ResultData>
            </UI.SelectedSet>
            <UI.SelectedSet>
              <UI.ResultLabel>{R.strings.MEDIAN}</UI.ResultLabel>
              <UI.ResultData>{numeral(median).format(this.numberFormat)}</UI.ResultData>
            </UI.SelectedSet>
            <UI.SelectedSet>
              <UI.ResultLabel>{R.strings.STD_DEV}</UI.ResultLabel>
              <UI.ResultData>{numeral(stdDev).format(this.numberFormat)}</UI.ResultData>
            </UI.SelectedSet>
            <UI.SelectedSet>
              <UI.ResultLabel>{R.strings.MODE}</UI.ResultLabel>
              <UI.ResultData>{numeral(mode).format(this.numberFormat)}</UI.ResultData>
            </UI.SelectedSet>
          </UI.ResultsColumn>
        }
      </>
    );
  }
};

/* =============================================================================
=  Redux
============================================================================= */
const mapStateToProps = (state: RootState) => ({
  isFetching: state.datas.isFetchingData,
  error: state.datas.fetchingDataError,
  data: state.datas.dataSet,
  dataSetName: state.datas.dataSetName,
  dataPayload: state.datas.dataPayload,
  mean: selectMean(state),
  median: selectMedian(state),
  mode: selectMode(state),
  stdDev: selectStdDev(state),
});
const mapDispatchToProps = (d: Dispatch<RootAction>) => bindActionCreators({
  setDataInput,
  addToSet,
}, d);
export default connect(mapStateToProps, mapDispatchToProps)(Datalicous);
