import * as React from 'react';
import {
  ScrollView as RNScrollView,
  ImageBackground as RNImageBackground,
} from 'react-native';

import { ScrollDivProps } from './scrolldiv.type';
import { getStyle } from './scrolldiv.style';
import { useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const ScrollDiv: React.FunctionComponent<ScrollDivProps> = (incomingProps) => {
  const props = useDefaultProps('ScrollDiv', incomingProps, {
    bg: 'transparent',
    flexDir: 'column',
    flexWrap: 'nowrap',
    rounded: 'none',
    shadow: 0,
    shadowColor: 'gray900',
    position: 'relative',
    bgMode: 'cover',
  });

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
    position,
    style,
    flexDir,
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
    flexWrap,
    shadow,
    shadowColor,
    ...rest
  } = props;
  const { theme } = useTheme();
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
    <RNScrollView style={computedStyle.div} {...rest}>
      {children}
    </RNScrollView>
  );
};

// ScrollDiv.defaultProps = {
//   bg: 'transparent',
//   flexDir: 'column',
//   flexWrap: 'nowrap',
//   rounded: 'none',
//   shadow: 0,
//   shadowColor: 'gray900',
//   position: 'relative',
//   bgMode: 'cover',
// };

export { ScrollDiv };
