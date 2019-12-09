import * as React from 'react';
import { useContext } from 'react';
import {
  View as RNView,
  Text as RNText,
  ImageBackground as RNImageBackground,
} from 'react-native';

import { BadgeProps } from './badge.type';
import { getStyle } from './badge.style';
import { ThemeContext } from '../../theme';

const Badge: React.FunctionComponent<BadgeProps> = (props: BadgeProps) => {
  const {
    h,
    w,
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
    minH,
    minW,
    style,
    shadow,
    rounded,
    position,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    alignItems,
    justifyContent,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    shadowColor,
    children,
    count,
    color,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  return (
    <RNView style={computedStyle.container}>
      {children}
      <RNView style={computedStyle.div} {...rest}>
        {count && <RNText style={computedStyle.text}>{count}</RNText>}
      </RNView>
    </RNView>
  );
};

Badge.defaultProps = {
  bg: 'green500',
  rounded: 'circle',
  shadow: 0,
  color: 'white',
  top: 0,
  right: 0,
  shadowColor: 'gray900',
  position: 'relative',
  fontSize: 'text100',
};

export { Badge };
