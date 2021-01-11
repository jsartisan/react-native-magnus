import * as React from 'react';

import { View as RNView, StyleSheet } from 'react-native';
import { TriangleProps } from './tooltip.type';

const Triangle: React.FunctionComponent<TriangleProps> = (props) => {
  const { style, invert } = props;
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
