import {
  ViewProps as RNViewProps,
  ImageSourcePropType as RNImageSourcePropType,
} from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  ResponsiveType,
  BaseBgModeType,
  BaseJustifyType,
  BaseAlignSelfType,
  BaseAlignItemsType,
  BaseFlexWrapType,
  BaseFlexDirectionType,
  BasePositionType,
  BaseOverflowType,
  BaseBorderStyleType,
} from '../../theme';

export interface DivProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType {
  h?: ResponsiveType<string | number>;
  w?: ResponsiveType<string | number>;
  bg?: ResponsiveType<string>;
  minH?: ResponsiveType<string | number>;
  minW?: ResponsiveType<string | number>;
  maxH?: ResponsiveType<string | number>;
  maxW?: ResponsiveType<string | number>;
  bgImg?: RNImageSourcePropType;
  bgMode?: ResponsiveType<BaseBgModeType>;
  flex?: ResponsiveType<number>;
  justifyContent?: ResponsiveType<BaseJustifyType>;
  alignSelf?: ResponsiveType<BaseAlignSelfType>;
  alignItems?: ResponsiveType<BaseAlignItemsType>;
  flexDir?: ResponsiveType<BaseFlexDirectionType>;
  flexWrap?: ResponsiveType<BaseFlexWrapType>;
  position?: ResponsiveType<BasePositionType>;
  overflow?: ResponsiveType<BaseOverflowType>;
  borderStyle?: ResponsiveType<BaseBorderStyleType>;
  top?: ResponsiveType<number>;
  right?: ResponsiveType<number>;
  bottom?: ResponsiveType<number>;
  left?: ResponsiveType<number>;
  opacity?: ResponsiveType<number>;
  children?: React.ReactNode[] | React.ReactNode;
  row?: ResponsiveType<boolean>;
  zIndex?: ResponsiveType<number>;
}
