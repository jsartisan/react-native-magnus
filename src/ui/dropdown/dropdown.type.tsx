import { ModalProps as RNModalProps } from 'react-native-modal';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../theme';

export type DropdownRef = {
  open: () => void;
  close: () => void;
};

export interface DropdownProps
  extends RNModalProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  title?: string | React.ReactNode;
  bg?: string;
  h?: number | string;
  showSwipeIndicator?: boolean;
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
}
