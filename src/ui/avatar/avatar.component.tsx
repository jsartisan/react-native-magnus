import * as React from 'react';
import { View as RNView, Image as RNImage } from 'react-native';

import { getStyle } from './avatar.style';
import { useTheme } from '../../theme';
import { AvatarGroup } from './avatar.group.component';
import { AvatarProps, CompoundedAvatar } from './avatar.type';
import { Text } from '../text/text.component';
import { getSpecificProps } from '../../utilities';
import { textProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Avatar: CompoundedAvatar<AvatarProps> = (incomingProps) => {
  const props = useDefaultProps('Avatar', incomingProps, {
    bg: 'transparent',
    size: 48,
    color: 'gray500',
    rounded: 'circle',
    fontSize: 'md',
    fontWeight: 'bold',
    shadow: 'none',
    shadowColor: 'gray500',
    position: 'relative',
    zIndex: 1,
  });

  const {
    bg,
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
    position,
    style,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
    borderColor,
    color,
    fontSize,
    size,
    alignSelf,
    bottom,
    left,
    right,
    top,
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
    shadow,
    shadowColor,
    opacity,
    zIndex,
    source,
    ...rest
  } = props;
  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  /**
   * render the content based on the props passed
   */
  const renderContent = () => {
    if (source) {
      return <RNImage source={source} style={computedStyle.image} />;
    }

    if (typeof children === 'string') {
      return <Text {...getSpecificProps(props, ...textProps)}>{children}</Text>;
    }

    return children;
  };

  return (
    <RNView style={computedStyle.container} {...rest}>
      {renderContent()}
    </RNView>
  );
};

// Avatar.defaultProps = {
//   bg: 'transparent',
//   size: 48,
//   color: 'gray500',
//   rounded: 'circle',
//   fontSize: 'md',
//   shadow: 'none',
//   shadowColor: 'gray500',
//   position: 'relative',
//   zIndex: 1,
// };

Avatar.Group = AvatarGroup;

export { Avatar };
