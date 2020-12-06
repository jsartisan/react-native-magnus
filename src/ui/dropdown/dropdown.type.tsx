import { ModalProps } from '../modal/modal.type';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../theme';

export interface DropdownRef {
  open: () => void;
  close: () => void;
}

export interface DropdownProps
  extends ModalProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  title?: string | React.ReactNode;
  bg?: string;
  h?: number | string;
  w?: number | string;
  minW?: number | string;
  minH?: number | string;
  showSwipeIndicator?: boolean;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  overflow?: 'hidden' | 'visible' | 'scroll';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  children: React.ReactElement[] | React.ReactElement;
}
