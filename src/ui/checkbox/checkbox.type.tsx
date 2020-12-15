import { PressableProps as RNButtonProps } from 'react-native';

import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';
import { CheckboxGroup } from './group.component';

export type CompundedCheckbox<P> = React.FunctionComponent<P> & {
  Group: typeof CheckboxGroup;
};

export interface CheckboxProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType {
  h?: number | string;
  w?: number | string;
  bg?: string;
  highlightBg?: string;
  position?: 'absolute' | 'relative';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  fontWeight?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  top?: number;
  flex?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color?: string;
  loading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
  underlayColor?: string;
  minW?: number | string;
  minH?: number | string;
  fontSize?: string | number;
  loaderSize?: number | string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  block?: boolean;
  borderless?: boolean;
  rippleColor?: string;
  ripple?: boolean;
  opacity?: number;
  zIndex?: number;
  activeColor?: string;
  inactiveColor?: string;
  defaultChecked?: boolean;
  activeIcon?: string | React.ReactNode;
  inactiveIcon?: string | React.ReactNode;
  checked?: boolean;
  onChecked?: (newValue: boolean) => void;
  onChange?: (value: any) => void;
  value?: any;
  children: ((states: ICheckboxStates) => React.ReactNode) | React.ReactNode;
}

interface ICheckboxStates {
  focussed?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
