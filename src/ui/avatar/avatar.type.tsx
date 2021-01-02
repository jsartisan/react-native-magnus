import {
  ViewProps as RNViewProps,
  ImageSourcePropType as RNImageSourcePropType,
} from 'react-native';

import { AvatarGroup } from './avatar.group.component';
import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  BackgroundPropsType,
  FlexPropsType,
  OpacityPropsType,
  PositionPropsType,
  TextPropsType,
  ZIndexPropsType,
} from '../../types';

export type CompoundedAvatar<P> = React.FunctionComponent<P> & {
  Group: typeof AvatarGroup;
};

export interface AvatarProps
  extends RNViewProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType,
    PositionPropsType,
    ZIndexPropsType,
    OpacityPropsType,
    Pick<FlexPropsType, 'alignSelf'>,
    Pick<TextPropsType, 'color' | 'fontSize'>,
    Pick<BackgroundPropsType, 'bg'> {
  size?: number;
  source?: RNImageSourcePropType;
}
