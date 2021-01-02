import { PressableProps as RNButtonProps } from 'react-native';
import {
  BackgroundPropsType,
  ButtonPropsType,
  DimensionPropsType,
  DisabledPropsType,
  FlexPropsType,
  LoadingPropsType,
  OverlayPropsType,
  PositionPropsType,
  TextPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../types';

export interface FabProps
  extends RNButtonProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType,
    DimensionPropsType,
    FlexPropsType,
    LoadingPropsType,
    PositionPropsType,
    DisabledPropsType,
    OverlayPropsType,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<ButtonPropsType, 'block' | 'borderless' | 'rippleColor' | 'ripple'>,
    Pick<TextPropsType, 'color' | 'fontSize'> {
  h?: number;
  center?: boolean;
  icon: string | React.ReactNode;
  activeIcon: string | React.ReactNode;
  showBackground?: boolean;
  openOnMount?: boolean;
  onClose?: () => void;
  onPressBackdrop?: () => void;
  animated?: boolean;
  onOpen?: () => void;
  useNativeDriver?: boolean;
}
