import { Platform } from 'react-native';

const { Version, OS } = Platform;

export const IS_ANDROID = OS === 'android';
export const IS_LT_LOLLIPOP = Version < 21;
export const ANDROID_VERSION_LOLLIPOP = 21;
export const ANDROID_VERSION_PIE = 28;

export const canSupportRipple =
  Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;
