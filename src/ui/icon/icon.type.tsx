import { ViewProps as RNViewProps } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export type iconFontFamilyType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'Fontisto'
  | 'SimpleLineIcons';

export interface IconProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType {
  h?: number;
  w?: number;
  minW?: number | string;
  minH?: number | string;
  maxH?: number | string;
  maxW?: number | string;
  bg?: string;
  name: string;
  color?: string;
  position?: 'absolute' | 'relative';
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  fontFamily?: iconFontFamilyType;
  fontSize?: string | number;
  zIndex?: number;
  opacity?: number;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
}
