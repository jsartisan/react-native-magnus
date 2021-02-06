import { ViewProps as RNViewProps } from 'react-native';
import {
  BackgroundPropsType,
  DimensionPropsType,
  FlexPropsType,
  OpacityPropsType,
  PositionPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

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
    ShadowPropsType,
    DimensionPropsType,
    PositionPropsType,
    ZIndexPropsType,
    OpacityPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<TextPropsType, 'color' | 'fontSize'>,
    Pick<FlexPropsType, 'alignSelf'>,
    VariantPropsType {
  name: string;
  fontFamily?: iconFontFamilyType;
}
