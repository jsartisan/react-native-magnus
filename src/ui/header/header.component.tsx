import * as React from 'react';
import { Text } from '../text/text.component';
import { getStyle } from './header.style';
import { useTheme } from '../../theme';
import { HeaderProps } from './header.type';
import { getSpecificProps } from '../../utilities';
import { textProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Div } from '../div/div.component';

const Header: React.FunctionComponent<HeaderProps> = (incomingProps) => {
  const props = useDefaultProps('Header', incomingProps, {
    minH: 70,
    p: 'lg',
    bg: 'white',
    rounded: 'none',
    flexDir: 'row',
    shadow: 'sm',
    shadowColor: 'gray900',
    position: 'relative',
    bgMode: 'cover',
    pointerEvents: 'auto',
    borderStyle: 'solid',
    alignItems: 'center',
    alignment: 'left',
    fontWeight: 'bold',
    fontSize: 'lg',
    textTransform: 'uppercase',
  });

  const { children, prefix, suffix, ...rest } = props;

  const { theme } = useTheme();
  const computedStyle = getStyle(theme, props);

  /**
   * renders children based on type
   */
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          {...getSpecificProps(props, ...textProps)}
          style={computedStyle.text}
        >
          {children}
        </Text>
      );
    }

    return children;
  };

  const getPrefix = () => {
    if (props.alignment === 'center') {
      return prefix;
    }
    return prefix ?? <Div px="sm" />;
  };

  return (
    <Div {...rest}>
      <Div style={computedStyle.prefix}>{getPrefix()}</Div>
      <Div style={computedStyle.center}>{renderChildren()}</Div>
      <Div style={computedStyle.suffix}>{suffix}</Div>
    </Div>
  );
};

export { Header };
