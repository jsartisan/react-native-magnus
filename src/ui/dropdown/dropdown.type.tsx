import { Animation, CustomAnimation } from 'react-native-animatable';
import { Orientation } from 'react-native-modal';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../theme';

export type DropdownRef = {
  open: () => void;
  close: () => void;
};

type OrNull<T> = null | T;

export interface DropdownProps
  extends BorderPropsType,
    SpacingPropsType,
    RoundedPropsType {
  title?: string | React.ReactNode;
  bg?: string;
  h?: number | string;
  showSwipeIndicator?: boolean;
  children: React.ReactElement[] | React.ReactElement;
  animationIn?: Animation | CustomAnimation;
  animationInTiming?: number;
  animationOut?: Animation | CustomAnimation;
  animationOutTiming?: number;
  avoidKeyboard?: boolean;
  coverScreen?: boolean;
  hasBackdrop?: boolean;
  backdropColor?: string;
  backdropOpacity?: number;
  backdropTransitionInTiming?: number;
  backdropTransitionOutTiming?: number;
  customBackdrop?: React.ReactNode;
  useNativeDriver?: boolean;
  deviceHeight?: number;
  deviceWidth?: number;
  isVisible?: boolean;
  hideModalContentWhileAnimating?: boolean;
  propagateSwipe?: boolean;
  onModalShow?: () => void;
  onModalWillShow?: () => void;
  onModalHide?: () => void;
  onModalWillHide?: () => void;
  onBackButtonPress?: () => void;
  onBackdropPress?: () => void;
  swipeThreshold?: number;
  scrollTo?: OrNull<(e: any) => void>;
  scrollOffset?: number;
  scrollOffsetMax?: number;
  scrollHorizontal?: boolean;
  supportedOrientations?: Orientation[];
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
}
