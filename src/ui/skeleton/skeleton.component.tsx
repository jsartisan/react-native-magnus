import * as React from 'react';
import * as Animatable from 'react-native-animatable';

import { Div } from '../div/div.component';
import { SkeletonProps } from './skeleton.type';

const Box: React.FunctionComponent<SkeletonProps> = (props) => {
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

const Circle: React.FunctionComponent<SkeletonProps> = (props) => {
  return <Box {...props} />;
};

Box.defaultProps = {
  bg: 'gray400',
  h: 15,
  w: 15,
  rounded: 'lg',
  duration: 1000,
};

Circle.defaultProps = {
  bg: 'gray400',
  h: 15,
  w: 15,
  rounded: 'circle',
};

export { Box, Circle };
