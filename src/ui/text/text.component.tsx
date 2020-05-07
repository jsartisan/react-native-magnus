import * as React from 'react';
import { useContext } from 'react';
import { Text as RNText } from 'react-native';

import { TextProps } from './text.type';
import { getStyle } from './text.style';
import { ThemeContext } from '../../theme';

const Text: React.FunctionComponent<TextProps> = (props) => {
  const {
    w,
    h,
    bg,
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
    flex,
    minH,
    minW,
    color,
    fontSize,
    children,
    textAlign,
    fontWeight,
    lineHeight,
    letterSpacing,
    textTransform,
    textDecorColor,
    textDecorStyle,
    fontStyle,
    textDecorLine,
    textAlignVertical,
    overflow,
    opacity,
    zIndex,
    style,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  return (
    <RNText style={computedStyle.text} {...rest}>
      {children}
    </RNText>
  );
};

Text.defaultProps = {
  color: 'gray900',
  textAlign: 'auto',
  textTransform: 'none',
  fontSize: 'md',
  overflow: 'hidden',
};

export { Text };
