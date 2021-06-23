import { FC, ReactNode, ReactElement } from 'react';
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
  VariantPropsType,
} from '../../types';
import { DivProps } from '../div/div.type';
import { RadioGroup } from './group.component';

export type CompoundedRadio<P> = FC<P> & {
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
    Pick<TextPropsType, 'fontWeight' | 'color' | 'fontSize'>,
    VariantPropsType {
  highlightBg?: string;
  activeColor?: string;
  inactiveColor?: string;
  defaultChecked?: boolean;
  activeIcon?: string | ReactNode;
  inactiveIcon?: string | ReactNode;
  checked?: boolean;
  onChange?: (value: any) => void;
  value?: any;
  children: ((states: RadioStates) => ReactNode) | ReactNode;
}

export interface RadioStates {
  focussed?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export interface RadioGroupProps extends DivProps {
  onChange?: (value: any) => void;
  value?: any;
  defaultValue?: any;
  children: ReactElement[] | ReactElement;
}

// Backwards compatibility
export type IRadioProps = RadioProps;
