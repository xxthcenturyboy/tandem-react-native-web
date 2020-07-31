# React Native [Web] + Monorepo
## Tandem Challenge

### How to run

_Requirements: [React Native](https://facebook.github.io/react-native/docs/getting-started.html#native) (last tested on react-native@0.61)_

  - `$ yarn`
  - `$ cd packages/mobile/ios`
  - `$ pod install`
  - `$ cd -`
  - `$ yarn workspace web start`
  - `$ yarn workspace mobile start`
  - Run the project
    - [iOS] Via Xcode
      - `yarn xcode` (open the project on Xcode)
      - Press the Run button
    - [Android] Via Android Studio
      - `yarn studio` (open the project on Android Studio)
      - My Android Studio required that I open it manually
      - Press the Run button
    - Via CLI
      - _You may need to launch your device emulator before the next command_
      - `$ yarn android` or  `$ yarn ios`
