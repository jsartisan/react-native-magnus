import * as React from 'react';
import { useContext } from 'react';
import {
  View as RNView,
  Text as RNText,
  TouchableWithoutFeedback as RNButton,
} from 'react-native';

import { getStyle } from './tag.style';
import { ThemeContext } from '../../theme';
import { TagProps } from './tag.type';

const Tag: React.FunctionComponent<TagProps> = (props: TagProps) => {
  const {
    h,
    w,
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
    style,
    rounded,
    roundedTop,
    roundedRight,
    roundedBottom,
    roundedLeft,
    children,
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
    suffix,
    prefix,
    onPress,
    ...rest
  } = props;
  const { theme } = useContext(ThemeContext);
  const computedStyle = getStyle(theme, props);

  return (
    <RNButton onPress={onPress}>
      <RNView style={computedStyle.div} {...rest}>
        {prefix && <RNView style={computedStyle.prefix}>{prefix}</RNView>}
        <RNText style={computedStyle.text}>{children}</RNText>
        {suffix && <RNView style={computedStyle.suffix}>{suffix}</RNView>}
      </RNView>
    </RNButton>
  );
};

Tag.defaultProps = {
  px: 'md',
  py: 'sm',
  bg: 'gray200',
  color: 'gray800',
  fontSize: 'text200',
  textAlign: 'auto',
  textTransform: 'none',
  rounded: 'md',
  borderWidth: 0,
  borderColor: 'transparent',
  onPress: () => {},
};

export { Tag };
