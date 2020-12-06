import { DivProps } from '../div/div.type';
import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
} from '../../theme';

export interface AnimatedProps
  extends DivProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType {
  animation?: 'fromRight' | 'fromLeft' | 'fromTop' | 'fromBottom' | 'fade';
  duration?: number;
  delay?: number;
}
