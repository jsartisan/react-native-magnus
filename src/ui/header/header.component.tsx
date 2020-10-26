import * as React from 'react';
import { useContext } from 'react';
import {
  View as RNView,
  ImageBackground as RNImageBackground,
} from 'react-native';

import { getStyle } from './header.style';
import { ThemeContext } from '../../theme';
import { HeaderProps } from './header.type';

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  const {
    bg,
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
    maxW,
    maxH,
    position,
    style,
    flexDir,
    row,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    bgImg,
    bgMode,
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
    borderBottomWidth,
    borderTopWidth,
    borderEndWidth,
    flexWrap,
    shadow,
    shadowColor,
    opacity,
    overflow,
    top,
    left,
    right,
    bottom,
    zIndex,
    prefix,
    suffix,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  if (bgImg) {
    return (
      <RNImageBackground
        source={bgImg}
        style={computedStyle.div}
        resizeMode={props.bgMode}
        imageStyle={computedStyle.image}
        {...rest}
      >
        {children}
      </RNImageBackground>
    );
  }

  return (
    <RNView style={computedStyle.container} {...rest}>
      <RNView style={computedStyle.prefix}>{prefix}</RNView>
      <RNView style={computedStyle.center}>{children}</RNView>
      <RNView style={computedStyle.suffix}>{suffix}</RNView>
    </RNView>
  );
};

Header.defaultProps = {
  bg: 'white',
  rounded: 'none',
  shadow: 'none',
  shadowColor: 'gray900',
  position: 'relative',
  bgMode: 'cover',
  pointerEvents: 'auto',
  row: true,
  borderStyle: 'solid',
  alignItems: 'center',
  alignment: 'left',
};

export { Header };
