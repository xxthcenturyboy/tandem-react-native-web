import { AppStateStatus } from 'react-native';
/**
 * Redux state for auth module
 */
export type State = {
  appState: AppStateStatus | null;
  isKeyboardOpen: boolean;
  appKey: number;
}

export type Device = {
  uniqueDeviceId: string;
  deviceId: string;
  carrier: string;
  deviceCountry: string;
  name: string;
  systemName: string;
  multiSigPubKey?: string | null;
  verifiedAt: string | null;
};

export type SystemTypes = {
  iOS: boolean;
  Android: boolean;
  Windoze: boolean;
}
