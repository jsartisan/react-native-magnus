import * as React from 'react';
import { View as RNView, StyleSheet } from 'react-native';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { TriangleProps } from './tooltip.type';

const Triangle: React.FunctionComponent<TriangleProps> = (incomingProps) => {
  const props = useDefaultProps(null, incomingProps, {
    invert: true,
  });

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

export { Triangle };
