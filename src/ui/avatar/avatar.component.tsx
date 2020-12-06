import * as React from 'react';
import { useContext } from 'react';
import { Text as RNText, View as RNView, Image as RNImage } from 'react-native';

import { getStyle } from './avatar.style';
import { ThemeContext } from '../../theme';
import { AvatarGroup } from './avatar.group.component';
import { AvatarProps, CompoundedAvatar } from './avatar.type';

const Avatar: CompoundedAvatar<AvatarProps> = (props) => {
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
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  /**
   * render the content based on the props passed
   */
  const renderContent = () => {
    if (source) {
      return <RNImage source={source} style={computedStyle.image} />;
    }

    if (typeof children === 'string') {
      return <RNText style={computedStyle.text}>{children}</RNText>;
    }

    return children;
  };

  return (
    <RNView style={computedStyle.container} {...rest}>
      {renderContent()}
    </RNView>
  );
};

Avatar.defaultProps = {
  bg: 'transparent',
  size: 48,
  color: 'gray500',
  rounded: 'circle',
  fontSize: 'md',
  shadow: 'none',
  shadowColor: 'gray500',
  position: 'relative',
  zIndex: 1,
};

Avatar.Group = AvatarGroup;

export { Avatar };
