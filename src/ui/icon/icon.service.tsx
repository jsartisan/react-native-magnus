import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Zocial,
  Octicons,
  SimpleLineIcons,
} from '@expo/vector-icons';

import { iconFontFamilyType } from './icon.type';

/**
 * get icon set
 */
export const getIconSet = (fontFamily: iconFontFamilyType = 'FontAwesome') => {
  if (fontFamily === 'AntDesign') {
    return AntDesign;
  }

  if (fontFamily === 'Entypo') {
    return Entypo;
  }

  if (fontFamily === 'EvilIcons') {
    return EvilIcons;
  }

  if (fontFamily === 'Feather') {
    return Feather;
  }

  if (fontFamily === 'FontAwesome') {
    return FontAwesome;
  }

  if (fontFamily === 'FontAwesome5') {
    return FontAwesome5;
  }

  if (fontFamily === 'Foundation') {
    return Foundation;
  }

  if (fontFamily === 'Ionicons') {
    return Ionicons;
  }

  if (fontFamily === 'MaterialIcons') {
    return MaterialIcons;
  }

  if (fontFamily === 'MaterialCommunityIcons') {
    return MaterialCommunityIcons;
  }

  if (fontFamily === 'Zocial') {
    return Zocial;
  }

  if (fontFamily === 'SimpleLineIcons') {
    return SimpleLineIcons;
  }

  if (fontFamily === 'Octicons') {
    return Octicons;
  }

  if (fontFamily === 'Fontisto') {
    return Fontisto;
  }

  return Ionicons;
};
