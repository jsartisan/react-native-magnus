import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme';

import { HeaderProps } from './header.type';

/**
 * computed styles
 *
 * @param theme
 * @param props
 */
export const getStyle = (_theme: ThemeType, props: HeaderProps) => {
  const computedStyle: any = {};

  // merging style props to computed style
  if (props.style) {
    computedStyle.container = {
      ...computedStyle.container,
      // @ts-ignore
      ...props.style,
    };
  }

  computedStyle.center = {
    flex: 1,
  };

  if (props.suffix) {
    computedStyle.suffix = {
      zIndex: 1,
      flexDirection: 'row',
    };
  }

  if (props.prefix) {
    computedStyle.prefix = {
      flexDirection: 'row',
      zIndex: 1,
    };
  }

  if (props.alignment === 'center') {
    computedStyle.center = {
      ...computedStyle.center,
      justifyContent: 'center',
      alignItems: 'center',
    };

    computedStyle.container = {
      ...computedStyle.container,
      justifyContent: 'space-between',
    };

    if (props.suffix || props.prefix) {
      computedStyle.center = {
        ...computedStyle.center,
      };
    }
  } else {
    computedStyle.suffix = {
      ...computedStyle.suffix,
      justifyContent: 'flex-end',
    };
  }

  return StyleSheet.create(computedStyle);
};
