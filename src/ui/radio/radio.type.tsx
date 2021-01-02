import * as React from 'react';
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
import { RadioGroup } from './group.component';

export type IRadio<P> = React.FunctionComponent<P> & {
  Group: typeof RadioGroup;
};

export interface RadioProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    ShadowPropsType,
    RoundedPropsType,
    PositionPropsType,
    DimensionPropsType,
    FlexPropsType,
    LoadingPropsType,
    DisabledPropsType,
    PrefixSuffixPropsType,
    OpacityPropsType,
    ZIndexPropsType,
    Omit<ButtonPropsType, 'underlayColor'>,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<TextPropsType, 'fontWeight' | 'color' | 'fontSize'> {
  highlightBg?: string;
  activeColor?: string;
  inactiveColor?: string;
  defaultChecked?: boolean;
  activeIcon?: string | React.ReactNode;
  inactiveIcon?: string | React.ReactNode;
  checked?: boolean;
  onChange?: (value: any) => void;
  value?: any;
  children: ((states: RadioStates) => React.ReactNode) | React.ReactNode;
}

interface RadioStates {
  focussed?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

// Backwards compatability
export type IRadioProps = RadioProps;
