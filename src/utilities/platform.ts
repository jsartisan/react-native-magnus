import {
  Dimensions as RNDimensions,
  Platform as RNPlatform,
} from 'react-native';

/**
 * check if phone is iPhone X
 */
export function isIphoneX() {
  const dimension = RNDimensions.get('window');

  return (
    RNPlatform.OS === 'ios' &&
    !RNPlatform.isPad &&
    !RNPlatform.isTVOS &&
    (dimension.height === 812 || dimension.width === 812)
  );
}

export const isIOS = RNPlatform.OS === 'ios';
