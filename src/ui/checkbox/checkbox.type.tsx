import { PressableProps as RNButtonProps } from 'react-native';
import {
  BackgroundPropsType,
  ButtonPropsType,
  DimensionPropsType,
  DisabledPropsType,
  FlexPropsType,
  LoadingPropsType,
  OpacityPropsType,
  PositionPropsType,
  PrefixSuffixPropsType,
  TextPropsType,
  ZIndexPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../types';
import { CheckboxGroup } from './group.component';

export type CompundedCheckbox<P> = React.FunctionComponent<P> & {
  Group: typeof CheckboxGroup;
};

export interface CheckboxProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    DimensionPropsType,
    PositionPropsType,
    FlexPropsType,
    LoadingPropsType,
    PrefixSuffixPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    DisabledPropsType,
    Pick<TextPropsType, 'fontWeight' | 'color' | 'fontSize'>,
    Pick<BackgroundPropsType, 'bg'>,
    ButtonPropsType {
  highlightBg?: string;
  activeColor?: string;
  inactiveColor?: string;
  defaultChecked?: boolean;
  activeIcon?: string | React.ReactNode;
  inactiveIcon?: string | React.ReactNode;
  checked?: boolean;
  onChecked?: (newValue: boolean) => void;
  onChange?: (value: any) => void;
  value?: any;
  children?: ((states: CheckboxStates) => React.ReactNode) | React.ReactNode;
}

export interface CheckboxStates {
  focussed?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
