import * as React from 'react';
import { useContext } from 'react';

import { View as RNView, StyleSheet } from 'react-native';
import { TriangelProps } from './tooltip.type';
import { ThemeContext } from '../../theme';

const Triangle: React.FunctionComponent<TriangelProps> = props => {
  const { style, invert, ...rest } = props;
  let computedStyle = style;

  if (invert) {
    computedStyle = StyleSheet.flatten([
      style,
      {
        transform: [{ rotate: '180deg' }],
      },
    ]);
  }

  return <RNView style={computedStyle} />;
};

Triangle.defaultProps = {
  invert: false,
};

export { Triangle };
