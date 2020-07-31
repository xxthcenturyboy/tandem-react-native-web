import React from 'react';
import { Provider } from 'react-redux';
import { bootstrap } from './bootstrap';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import DataLicious from 'components/src/datalicious/Data';
import { store } from './redux';
import { Router, Route, Link } from "components/src/app/router";
import * as UI from 'components/src/app/UI';

type Props = {}

const Root = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <UI.Container
          contentInsetAdjustmentBehavior="automatic"
        >
          <Router>
            <Route path="/" component={DataLicious} />
          </Router>
        </UI.Container>
      </SafeAreaView>
    </>
  );
}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    bootstrap();
  }

  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}



// declare var global: any

export { App };
