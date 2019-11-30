import * as React from 'react';
import { useContext, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

import { getStyle } from './skeleton.style';
import { ThemeContext } from '../../theme';
import { Div } from '../div/div.component';
import { SkeletonProps } from './skeleton.type';

const Box: React.FunctionComponent<SkeletonProps> = props => {
  const {
    m,
    mt,
    mr,
    mb,
    ml,
    p,
    pr,
    pt,
    pb,
    pl,
    bg,
    h,
    w,
    flex,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  const fadeIn = {
    0: {
      opacity: 1,
    },
    0.5: {
      opacity: 0.3,
    },
    1: {
      opacity: 1,
    },
  };

  return (
    <Animatable.View
      style={{ ...computedStyle.container }}
      animation={fadeIn}
      duration={1000}
      easing="linear"
      iterationCount="infinite"
      {...rest}
    />
  );
};

const Circle: React.FunctionComponent<SkeletonProps> = props => {
  return <Box {...props} />;
};

Box.defaultProps = {
  bg: 'gray400',
  h: 15,
  w: '100%',
  rounded: 'md',
};

Circle.defaultProps = {
  bg: 'gray400',
  h: 15,
  w: 15,
  rounded: 'circle',
};

export { Box, Circle };
