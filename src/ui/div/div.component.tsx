import * as React from 'react';
import {
  View as RNView,
  ImageBackground as RNImageBackground,
} from 'react-native';

import { DivProps } from './div.type';
import { getStyle } from './div.style';
import { useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Div: React.FunctionComponent<DivProps> = (incomingProps) => {
  const props = useDefaultProps('Div', incomingProps, {
    bg: 'transparent',
    flexDir: 'column',
    flexWrap: 'nowrap',
    rounded: 'none',
    shadow: 'none',
    position: 'relative',
    bgMode: 'cover',
    pointerEvents: 'auto',
    row: false,
    borderStyle: 'solid',
  });

  let { children } = props;

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
    spacing,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  if (spacing) {
    const paddingProperty =
      computedStyle.flexDirection === 'column'
        ? 'paddingBottom'
        : 'paddingRight';

    const count = React.Children.count(children);

    children = React.Children.map(children, (child, index) => {
      const viewStyle = {
        [paddingProperty]: index !== count - 1 ? spacing : 0,
      };
      return (
        <RNView key={'child-' + index} style={viewStyle}>
          {child}
        </RNView>
      );
    }) as any;
  }

  // if there is a bgImage prop, use ImageBackground
  // instead of regular View component
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

// Div.defaultProps = {
//   bg: 'transparent',
//   flexDir: 'column',
//   flexWrap: 'nowrap',
//   rounded: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   bgMode: 'cover',
//   pointerEvents: 'auto',
//   row: false,
//   borderStyle: 'solid',
// };

export { Div };
