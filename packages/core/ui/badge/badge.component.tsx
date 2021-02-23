import * as React from 'react';
import { View as RNView } from 'react-native';

import { BadgeProps } from './badge.type';
import { getStyle } from './badge.style';
import { useTheme } from '../../theme';
import { Text } from '../text/text.component';
import { getSpecificProps } from '../../utilities';
import { textProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Badge: React.FunctionComponent<BadgeProps> = (incomingProps) => {
  const props = useDefaultProps('Badge', incomingProps, {
    bg: 'green700',
    rounded: 'circle',
    shadow: 0,
    color: 'white',
    top: 0,
    right: 0,
    shadowColor: 'gray900',
    position: 'relative',
    fontSize: 'sm',
    fontWeight: 'bold',
  });

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
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  return (
    <RNView style={computedStyle.container}>
      <RNView style={{ alignSelf: 'flex-start' }}>
        {typeof children !== 'string' && children}

        <RNView style={computedStyle.div} {...rest}>
          {typeof children === 'string' && (
            <Text
              {...getSpecificProps(props, ...textProps)}
              style={computedStyle.text}
            >
              {children}
            </Text>
          )}
        </RNView>
      </RNView>
    </RNView>
  );
};

// Badge.defaultProps = {
//   bg: 'green700',
//   rounded: 'circle',
//   shadow: 0,
//   color: 'white',
//   top: 0,
//   right: 0,
//   shadowColor: 'gray900',
//   position: 'relative',
//   fontSize: 'sm',
// };

export { Badge };
