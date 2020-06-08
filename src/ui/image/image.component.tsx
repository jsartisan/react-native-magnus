import * as React from 'react';
import { useContext } from 'react';
import { Image as RNImage } from 'react-native';

import { getStyle } from './image.style';
import { ImageProps } from './image.type';
import { ThemeContext } from '../../theme';

const Image: React.FunctionComponent<ImageProps> = (props) => {
  const {
    h,
    w,
    m,
    mt,
    mr,
    mb,
    ml,
    ms,
    p,
    pr,
    pt,
    pb,
    pl,
    minH,
    minW,
    maxH,
    maxW,
    style,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    flex,
    shadow,
    shadowColor,
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
    opacity,
    alignSelf,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  return (
    <RNImage style={computedStyle.image} {...rest}>
      {children}
    </RNImage>
  );
};

Image.defaultProps = {};

export { Image };
