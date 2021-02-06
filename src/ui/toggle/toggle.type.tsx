import { TouchableOpacityProps as RNTouchableOpacityProps } from 'react-native';

import {
  BackgroundPropsType,
  DimensionPropsType,
  DisabledPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  VariantPropsType,
} from '../../types';

export interface ToggleProps
  extends SpacingPropsType,
    RoundedPropsType,
    BorderPropsType,
    DisabledPropsType,
    Pick<DimensionPropsType, 'w' | 'h'>,
    Pick<BackgroundPropsType, 'bg'>,
    Pick<RNTouchableOpacityProps, 'style'>,
    DisabledPropsType,
    VariantPropsType {
  testID?: string;
  on?: boolean;
  onPress: () => void;
  activeBg?: string;
  circleBg?: string;
  activeCircleBg?: string;
  duration?: number;
}
