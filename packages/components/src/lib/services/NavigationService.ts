import { NavigationActions, NavigationContainerComponent, StackActions } from 'react-navigation';

let _navigator: NavigationContainerComponent;

export default {
  navigate,
  setTopLevelNavigator,
  navigateReset,
};

///////////////////

function setTopLevelNavigator(navigatorRef: NavigationContainerComponent | null): void {
  if (navigatorRef) {
    _navigator = navigatorRef;
  }
}

/**
 * Abstracted navigation method so you can navigate from anywhere in the system.
 * If you don't have access to Navigate on props, use this service.
 */
function navigate(routeName: string, params?: any): void {
  if (_navigator) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }
}

/**
 * Fully replaces navigation stack
 */
function navigateReset(routeName: string, params?: any): void {
  if (_navigator && routeName) {
    const data = params? { routeName, params } : { routeName };
    _navigator.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate(data)]
      })
    );
  }
}

// function getParams(paramName: string, fallbackValue: string): string {
//   if (_navigator) {
//     _navigator.
//   }
// }

// Can add any other nav functions we need, just remember to export them
