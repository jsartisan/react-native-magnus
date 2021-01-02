import {
  BackgroundPropsType,
  DimensionPropsType,
  DisabledPropsType,
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
} from '../../types';

export interface ToggleProps
  extends SpacingPropsType,
    RoundedPropsType,
    BorderPropsType,
    DisabledPropsType,
    Pick<DimensionPropsType, 'w' | 'h'>,
    Pick<BackgroundPropsType, 'bg'>,
    DisabledPropsType {
  testID?: string;
  on?: boolean;
  onPress: () => void;
  activeBg?: string;
  circleBg?: string;
  activeCircleBg?: string;
  duration?: number;
}
