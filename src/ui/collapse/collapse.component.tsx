import * as React from 'react';
import { useContext, useState } from 'react';
import {
  View as RNView,
  ImageBackground as RNImageBackground,
} from 'react-native';

import { CollapseProps } from './collapse.type';
import { getStyle } from './collapse.style';
import { ThemeContext } from '../../theme';

const Collapse: React.FunctionComponent<CollapseProps> = (
  props: CollapseProps
) => {
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
    defaultActive,
    ...rest
  } = props;
  const [active, setActive] = useState(defaultActive);
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
    <RNView style={computedStyle.div} {...rest}>
      {children}
    </RNView>
  );
};

Collapse.defaultProps = {
  bg: 'transparent',
  flexDir: 'column',
  flexWrap: 'nowrap',
  rounded: 'none',
  shadow: 'none',
  shadowColor: 'gray900',
  position: 'relative',
  bgMode: 'cover',
  pointerEvents: 'auto',
  row: false,
  borderStyle: 'solid',
  defaultActive: false,
};

export { Collapse };
