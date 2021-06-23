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

  computedStyle.center = {};

  if (props.suffix) {
    computedStyle.suffix = {
      zIndex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    };
  }

  if (props.prefix) {
    computedStyle.prefix = {
      zIndex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    };
  }

  if (props.alignment === 'center') {
    computedStyle.center = {
      ...computedStyle.center,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    };

    computedStyle.container = {
      ...computedStyle.container,
      justifyContent: 'space-between',
    };

    if (props.suffix || props.prefix) {
      computedStyle.center = {
        ...computedStyle.center,
        ...StyleSheet.absoluteFillObject,
      };

      computedStyle.suffix = {
        ...computedStyle.suffix,
        flex: 1,
        justifyContent: 'flex-end',
      };
    }
  } else {
    computedStyle.center = {
      flex: 1,
    };
  }

  return StyleSheet.create(computedStyle);
};
