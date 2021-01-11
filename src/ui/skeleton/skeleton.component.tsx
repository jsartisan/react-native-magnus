import * as React from 'react';
import * as Animatable from 'react-native-animatable';
import { useDefaultProps } from '../../utilities/useDefaultProps';

import { Div } from '../div/div.component';
import { SkeletonProps, CompundedSkeleton } from './skeleton.type';

const Skeleton: CompundedSkeleton<SkeletonProps> = (incomingProps) => {
  const props = useDefaultProps('Skeleton', incomingProps, {
    bg: 'gray400',
    h: 15,
    w: '100%',
    rounded: 'lg',
    duration: 1000,
  });

  const { duration, ...rest } = props;

  Animatable.initializeRegistryWithDefinitions({
    fade: {
      0: {
        opacity: 1,
      },
      0.5: {
        opacity: 0.3,
      },
      1: {
        opacity: 1,
      },
    },
  });

  return (
    <Animatable.View
      animation="fade"
      duration={duration}
      easing="linear"
      iterationCount="infinite"
    >
      <Div {...rest} />
    </Animatable.View>
  );
};

export const Circle: React.FunctionComponent<SkeletonProps> = (
  incomingProps
) => {
  const props = useDefaultProps('SkeletonCircle', incomingProps, {
    bg: 'gray400',
    h: 15,
    w: 15,
    rounded: 'circle',
  });

  return <Skeleton {...props} />;
};

Skeleton.defaultProps = {
  bg: 'gray400',
  h: 15,
  w: '100%',
  rounded: 'lg',
  duration: 1000,
};

Circle.defaultProps = {
  bg: 'gray400',
  h: 15,
  w: 15,
  rounded: 'circle',
};

Skeleton.Box = Skeleton;
Skeleton.Circle = Circle;

export { Skeleton };
