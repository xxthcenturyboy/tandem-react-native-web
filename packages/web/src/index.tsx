import { AppRegistry } from 'react-native'

import { App } from 'components/src/app/App'

AppRegistry.registerComponent('tandem', () => App)
AppRegistry.runApplication('tandem', {
  rootTag: document.getElementById('root'),
})
