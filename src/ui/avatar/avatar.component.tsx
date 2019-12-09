import * as React from 'react';
import { useContext } from 'react';
import { Text as RNText, View as RNView, Image as RNImage } from 'react-native';

import { getStyle } from './avatar.style';
import { ThemeContext } from '../../theme';
import { AvatarProps } from './avatar.type';

const Avatar: React.FunctionComponent<AvatarProps> = props => {
  const { style, children, ...rest } = props;
  const theme = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  /**
   * render the content based on the props passed
   */
  const renderContent = () => {
    if (props.src) {
      return <RNImage source={props.src} style={computedStyle.image} />;
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
  bg: 'white',
  size: 48,
  color: 'black500',
  rounded: 'circle',
  fontSize: 'text400',
  shadow: 0,
  shadowColor: 'black500',
  position: 'relative',
};

export { Avatar };
