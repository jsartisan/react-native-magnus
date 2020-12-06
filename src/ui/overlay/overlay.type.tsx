import { ModalProps as RNModalProps } from 'react-native';

import { SpacingPropsType, RoundedPropsType } from '../../theme';

export interface OverlayRef {
  close: any;
  open: any;
}

export interface OverlayProps
  extends RNModalProps,
    SpacingPropsType,
    RoundedPropsType {
  bg?: string;
  w?: string | number;
  h?: number | string;
  flex?: number;
  minH?: number | string;
  minW?: number | string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  children: React.ReactElement[] | React.ReactElement;
  isVisible?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
}
