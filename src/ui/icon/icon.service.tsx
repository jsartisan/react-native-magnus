import IconEntypo from 'react-native-vector-icons/Entypo';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { iconFontFamilyType } from './icon.type';

/**
 * get icon set
 */
export const getIconSet = (fontFamily: iconFontFamilyType = 'FontAwesome') => {
  if (fontFamily === 'AntDesign') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.AntDesign) ||
      IconAntDesign
    );
  }

  if (fontFamily === 'Entypo') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.Entypo) ||
      IconEntypo
    );
  }

  if (fontFamily === 'EvilIcons') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.EvilIcons) ||
      IconEvilIcons
    );
  }

  if (fontFamily === 'Feather') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.Feather) ||
      IconFeather
    );
  }

  if (fontFamily === 'FontAwesome') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.FontAwesome) ||
      IconFontAwesome
    );
  }

  if (fontFamily === 'FontAwesome5') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.FontAwesome5) ||
      IconFontAwesome5
    );
  }

  if (fontFamily === 'Foundation') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.Foundation) ||
      IconFoundation
    );
  }

  if (fontFamily === 'Ionicons') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.Ionicons) ||
      IconIonicons
    );
  }

  if (fontFamily === 'MaterialIcons') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.MaterialIcons) ||
      IconMaterialIcons
    );
  }

  if (fontFamily === 'MaterialCommunityIcons') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.MaterialCommunityIcons) ||
      IconMaterialCommunityIcons
    );
  }

  if (fontFamily === 'Zocial') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.Zocial) ||
      IconZocial
    );
  }

  if (fontFamily === 'SimpleLineIcons') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.SimpleLineIcons) ||
      IconSimpleLineIcons
    );
  }

  if (fontFamily === 'Octicons') {
    return (
      // @ts-ignore
      (global.__expo &&
        // @ts-ignore
        global.__expo.Icon &&
        // @ts-ignore
        global.__expo.Icon.Octicons) ||
      IconOcticons
    );
  }

  return (
    // @ts-ignore
    (global.__expo &&
      // @ts-ignore
      global.__expo.Icon &&
      // @ts-ignore
      global.__expo.Icon.Ionicons) ||
    IconIonicons
  );
};
