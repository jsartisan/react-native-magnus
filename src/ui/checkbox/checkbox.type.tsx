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
import { CheckboxGroup } from './group.component';

export type CompundedCheckbox<P> = React.FunctionComponent<P> & {
  Group: typeof CheckboxGroup;
};

export interface CheckboxProps
  extends Omit<RNButtonProps, 'children'>,
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
    ButtonPropsType,
    VariantPropsType {
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

export interface CheckboxGroupProps extends DivProps {
  onChange?: (value: any[]) => void;
  value?: any[];
  defaultValue?: any[];
  children: React.ReactElement[] | React.ReactElement;
}

export interface CheckboxStates {
  focussed?: boolean;
  checked?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
