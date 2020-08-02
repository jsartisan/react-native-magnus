import * as React from 'react';
import { useContext } from 'react';
import { View as RNView, Text as RNText } from 'react-native';

import { BadgeProps } from './badge.type';
import { getStyle } from './badge.style';
import { ThemeContext } from '../../theme';
import { Div } from '../div/div.component';

const Badge: React.FunctionComponent<BadgeProps> = (props: BadgeProps) => {
  const {
    h,
    w,
    m,
    mt,
    mr,
    bg,
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
    style,
    shadow,
    rounded,
    position,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    alignItems,
    fontSize,
    justifyContent,
    borderColor,
    borderBottomColor,
    borderLeftColor,
    borderTopColor,
    borderRightColor,
    borderWidth,
    borderLeftWidth,
    borderRightWidth,
    borderEndWidth,
    shadowColor,
    children,
    right,
    top,
    left,
    bottom,
    color,
    count,
    opacity,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  return (
    <Div
      h={[20, 100]}
      w={[20, 100]}
      bg={['red500', 'yellow500']}
      mt={[0, 'md']}
    />
  );

  return (
    <RNView style={computedStyle.container}>
      <RNView style={{ alignSelf: 'flex-start' }}>
        {typeof children !== 'string' && children}
        <RNView style={computedStyle.div} {...rest}>
          {typeof children === 'string' && (
            <RNText style={computedStyle.text}>{children}</RNText>
          )}
        </RNView>
      </RNView>
    </RNView>
  );
};

Badge.defaultProps = {
  bg: 'green700',
  rounded: 'circle',
  shadow: 0,
  color: 'white',
  top: 0,
  right: 0,
  shadowColor: 'gray900',
  position: 'relative',
  fontSize: 'sm',
};

export { Badge };
