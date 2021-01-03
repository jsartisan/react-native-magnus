import * as React from 'react';
import { useContext } from 'react';
import {
  View as RNView,
  TouchableWithoutFeedback as RNButton,
} from 'react-native';

import { getStyle } from './tag.style';
import { ThemeContext } from '../../theme';
import { TagProps } from './tag.type';
import { Text } from '../text/text.component';
import { textProps } from '../../types';
import { getSpecificProps } from '../../utilities';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Tag: React.FunctionComponent<TagProps> = (incomingProps) => {
  const props = useDefaultProps('Tag', incomingProps, {
    px: 'lg',
    py: 'sm',
    bg: 'gray400',
    color: 'black',
    fontSize: 'lg',
    textAlign: 'auto',
    textTransform: 'none',
    rounded: 'md',
    borderWidth: 0,
    borderColor: 'transparent',
    onPress: () => {},
  });

  const {
    h,
    w,
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
    borderEndWidth,
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
        <Text {...getSpecificProps(props, ...textProps)}>{children}</Text>
        {suffix && <RNView style={computedStyle.suffix}>{suffix}</RNView>}
      </RNView>
    </RNButton>
  );
};

// Tag.defaultProps = {
//   px: 'lg',
//   py: 'sm',
//   bg: 'gray400',
//   color: 'black',
//   fontSize: 'lg',
//   textAlign: 'auto',
//   textTransform: 'none',
//   rounded: 'md',
//   borderWidth: 0,
//   borderColor: 'transparent',
//   onPress: () => {},
// };

export { Tag };
