import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { iconFontFamilyType } from './icon.type';

/**
 * get icon set
 */
export const getIconSet = (fontFamily: iconFontFamilyType = 'FontAwesome') => {
  if (fontFamily === 'AntDesign') {
    return IconAntDesign;
  }

  if (fontFamily === 'Entypo') {
    return IconEntypo;
  }

  if (fontFamily === 'EvilIcons') {
    return IconEvilIcons;
  }

  if (fontFamily === 'Feather') {
    return IconFeather;
  }

  if (fontFamily === 'FontAwesome') {
    return IconFontAwesome;
  }

  if (fontFamily === 'FontAwesome5') {
    return IconFontAwesome5;
  }

  if (fontFamily === 'Foundation') {
    return IconFoundation;
  }

  if (fontFamily === 'Ionicons') {
    return IconIonicons;
  }

  if (fontFamily === 'MaterialIcons') {
    return IconMaterialIcons;
  }

  if (fontFamily === 'MaterialCommunityIcons') {
    return IconMaterialCommunityIcons;
  }

  if (fontFamily === 'Zocial') {
    return IconZocial;
  }

  if (fontFamily === 'SimpleLineIcons') {
    return IconSimpleLineIcons;
  }

  if (fontFamily === 'Octicons') {
    return IconOcticons;
  }

  return IconIonicons;
};
