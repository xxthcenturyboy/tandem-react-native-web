/*
* Global Native Back button handler for Android
* Import into any component that you need control over the Natove Back button
* Wrap Entire View in Render Function and add onBack function
* Create onBack function within that component and handle according to the needs of that screen/view
*/

import React from "react";
import { NavigationScreenProp, withNavigation, NavigationFocusInjectedProps } from 'react-navigation';
import { BackHandler } from "react-native";
import { RootState, RootAction } from 'src/app/redux';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

type Props = {
  navigation: NavigationScreenProp<any>;
  onBack: () => void;
}
  & ReturnType<typeof mapStateToProps>
  & NavigationFocusInjectedProps
  & ReturnType<typeof mapDispatchToProps>;

class HandleBack extends React.Component<Props> {
  didFocus: any = null;
  willBlur: any = null;

  constructor(props: Props) {
    super(props);
    this.didFocus = props.navigation.addListener("didFocus", payload =>
      BackHandler.addEventListener("hardwareBackPress", this.onBack),
    );
  }

  componentDidMount() {
    this.willBlur = this.props.navigation.addListener("willBlur", payload =>
      BackHandler.removeEventListener("hardwareBackPress", this.onBack),
    );
  }

  onBack = () => {
    return this.props.onBack();
  };

  componentWillUnmount() {
    this.didFocus.remove();
    this.willBlur.remove();
    BackHandler.removeEventListener("hardwareBackPress", this.onBack);
  }

  render() {
    return this.props.children;
  }
}

/* =============================================================================
=  Redux
============================================================================= */
const mapStateToProps = (state: RootState) => ({
});
const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
}, dispatch as Dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(HandleBack));
