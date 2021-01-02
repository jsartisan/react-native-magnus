import * as React from 'react';
import { useContext } from 'react';
import {
  View as RNView,
  ImageBackground as RNImageBackground,
} from 'react-native';

import { Text } from '../text/text.component';
import { getStyle } from './header.style';
import { ThemeContext } from '../../theme';
import { HeaderProps } from './header.type';
import { Div } from '../div/div.component';

const Header: React.FunctionComponent<HeaderProps> = (props) => {
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

  const {
    color,
    fontSize,
    textDecorLine,
    textDecorStyle,
    fontStyle,
    textDecorColor,
    fontWeight,
    lineHeight,
    textAlign,
    textTransform,
    letterSpacing,
    textAlignVertical,
  } = rest;

  const titleProps = {
    color,
    fontSize,
    textDecorLine,
    textDecorStyle,
    fontStyle,
    textDecorColor,
    fontWeight,
    lineHeight,
    textAlign,
    textTransform,
    letterSpacing,
    textAlignVertical,
  };

  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return <Text {...titleProps}>{children}</Text>;
    }

    return children;
  };

  if (bgImg) {
    return (
      <RNImageBackground
        source={bgImg}
        style={computedStyle.container}
        resizeMode={props.bgMode}
        imageStyle={computedStyle.image}
        {...rest}
      >
        <RNView style={computedStyle.prefix}>{prefix}</RNView>
        <RNView style={computedStyle.center}>{renderChildren()}</RNView>
        <RNView style={computedStyle.suffix}>{suffix}</RNView>
      </RNImageBackground>
    );
  }

  return (
    <RNView style={computedStyle.container} {...rest}>
      <RNView style={computedStyle.prefix}>{prefix}</RNView>
      <RNView style={computedStyle.center}>{renderChildren()}</RNView>
      <RNView style={computedStyle.suffix}>{suffix}</RNView>
    </RNView>
  );
};

Header.defaultProps = {
  minH: 70,
  p: 'lg',
  bg: 'white',
  rounded: 'none',
  shadow: 'sm',
  shadowColor: 'gray900',
  position: 'relative',
  bgMode: 'cover',
  pointerEvents: 'auto',
  row: true,
  borderStyle: 'solid',
  alignItems: 'center',
  alignment: 'left',
  prefix: <Div px="sm" />,

  fontWeight: 'bold',
  fontSize: 'lg',
  textTransform: 'uppercase',
};

export { Header };
