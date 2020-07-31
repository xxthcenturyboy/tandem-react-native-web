import React from 'react';
import { connect } from 'react-redux';
import { RootState, RootAction } from 'src/app/redux';
import { Dispatch, bindActionCreators } from 'redux';
import { NavigationScreenProp } from 'react-navigation';
import BtnConfirm from 'lib/components/BtnPrimary';
import * as UI from './UI';
import R from 'res/R';


export type DialogProps = {
  dismissButtonHandler?: () => void;
  dismissButtonLabel: string;
  confirmButtonHandler: () => void | Promise<void>;
  confirmButtonLabel: string;
  text: string;
  returnRoute: string;
  title: string;
  showCancel?: boolean;
}

type Props = {
  navigation: NavigationScreenProp<any>;
}
  & ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>;

type State = {
}

class Modal extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const { navigation } = this.props;
    this._dismissButtonLabel = navigation.getParam('dismissButtonLabel', R.strings.CANCEL);
    this._dismissButtonHandler = navigation.getParam('dismissButtonHandler');
    this._confirmButtonLabel = navigation.getParam('confirmButtonLabel', R.strings.CONFIRM);
    this._confirmButtonHandler = navigation.getParam('confirmButtonHandler');
    this._title = navigation.getParam('title', R.strings.MODAL_DEF_TITLE);
    this._message = navigation.getParam('text', R.strings.MODAL_DEF_MSG);
    this._returnRoute = navigation.getParam('returnRoute', null);
    this._showCancel = navigation.getParam('showCancel');
  }

  _dismissButtonLabel: string;
  _dismissButtonHandler: (n: any) => void;
  _confirmButtonLabel: string;
  _confirmButtonHandler: (n: any) => void;
  _title: string;
  _message: string;
  _returnRoute: string;
  _showCancel: boolean;

  componentDidMount() {
  }

  async handlePress() {
    await this._confirmButtonHandler(this.props.navigation);
    this.closeModal();
  }

  handleDismiss() {
    if (this._dismissButtonHandler) {
      this._dismissButtonHandler(this.props.navigation);
    }
    this.closeModal();
  }

  closeModal() {
    const { navigation } = this.props;
    if (this._returnRoute) {
      navigation.navigate(this._returnRoute);
    }
  }

  render() {
    const showCancel = this._showCancel !== undefined ? this._showCancel : true;

    return (
      <UI.Container>
        <UI.InnerNoScroll>
          <UI.Title>
            {this._title}
          </UI.Title>
          <UI.Description>{this._message}</UI.Description>
          <BtnConfirm
            disabled={false}
            handlePress={() => this.handlePress()}
            isFetching={false}
            label={this._confirmButtonLabel}
            width={'200'}
          />
          {showCancel &&
            <UI.BtnDismiss
              onPress={() => this.handleDismiss()}
              disabled={false}
            >
              <UI.BtnDismissText>{this._dismissButtonLabel}</UI.BtnDismissText>
            </UI.BtnDismiss>
          }
        </UI.InnerNoScroll>

      </UI.Container>
    )
  }
}

/**
 * Redux
 */
const mapStateToProps = (state: RootState) => ({
});
const mapDispatchToProps = (d: Dispatch<RootAction>) => bindActionCreators({
}, d);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
