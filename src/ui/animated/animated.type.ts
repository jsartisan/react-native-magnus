import { DivProps } from '../div/div.type';
import {
  BorderPropsType,
  SpacingPropsType,
  RoundedPropsType,
  ShadowPropsType,
  VariantPropsType,
} from '../../types';

export interface AnimatedProps
  extends DivProps,
    BorderPropsType,
    SpacingPropsType,
    RoundedPropsType,
    ShadowPropsType,
    VariantPropsType {
  animation?: 'fromRight' | 'fromLeft' | 'fromTop' | 'fromBottom' | 'fade';
  duration?: number;
  delay?: number;
}
