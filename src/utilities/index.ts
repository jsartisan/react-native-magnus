import { Platform, Dimensions, StatusBar } from 'react-native';

const { Version, OS } = Platform;

export const IS_ANDROID = OS === 'android';
export const IS_LT_LOLLIPOP = Version < 21;
export const ANDROID_VERSION_LOLLIPOP = 21;
export const ANDROID_VERSION_PIE = 28;

export const canSupportRipple =
  Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let isIPhoneX = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
  isIPhoneX =
    (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) ||
    (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT);
}

export function getStatusBarHeight(skipAndroid: boolean) {
  return Platform.select({
    ios: isIPhoneX ? 44 : 20,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0,
  });
}

export { isIphoneX, isIOS } from './platform';
export { ScreenHeight, ScreenWidth } from './dimension';
