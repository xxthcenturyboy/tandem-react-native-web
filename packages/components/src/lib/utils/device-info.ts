import { Dimensions, Platform, ScaledSize } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import * as RNLocalize from 'react-native-localize';
import { Device, SystemTypes } from 'src/app/types';

export async function getDeviceInfo(): Promise<Device> {
  const carrier = await DeviceInfo.getCarrier();
  const name = await DeviceInfo.getDeviceName();
  return {
    uniqueDeviceId: DeviceInfo.getUniqueId(),
    deviceId: DeviceInfo.getDeviceId(),
    name,
    carrier,
    deviceCountry: RNLocalize.getCountry(),
    systemName: DeviceInfo.getSystemName(),
    verifiedAt: null
  };
}

/**
 * Returns the type of system that is being run.
 */
export const getSys = (): SystemTypes => {
  const sys = {
    iOS: false,
    Android: false,
    Windoze: false,
  };
  if (Platform.OS === 'android') {
    sys.Android = true;
  }
  if (Platform.OS === 'ios') {
    sys.iOS = true;
  }
  if (Platform.OS === 'windows') {
    sys.Windoze = true;
  }
  return sys;
}

/////////////////////////////
//      iPhone X stuff    //
////////////////////////////

function isIPhoneXSize(dim: ScaledSize): boolean {
  return dim.height == 812 || dim.width == 812;
}

function isIPhoneXrSize(dim: ScaledSize): boolean {
  return dim.height == 896 || dim.width == 896;
}

export function isIphoneX(): boolean {
  const dim = Dimensions.get('window');

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&

    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
}

function getDimensions(): {width: number, height: number} {
  const dim = Dimensions.get('window');
  return {
    width: dim.width,
    height: dim.height,
  }
}

/////////////////////////////
//      API                //
////////////////////////////

export default {
  getDimensions,
  system: getSys(),
  isIphoneX: isIphoneX(),
};
