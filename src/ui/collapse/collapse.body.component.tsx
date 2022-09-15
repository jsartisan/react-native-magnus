import * as React from 'react';
import { useRef, useState } from 'react';
import { Animated, Easing, LayoutChangeEvent } from 'react-native';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Div } from '../div/div.component';

import { CollapseBodyProps } from './collapse.type';

const CollapseBody: React.FunctionComponent<CollapseBodyProps> = (
  incomingProps
) => {
  const props = useDefaultProps('CollapseBody', incomingProps, {
    bg: 'transparent',
    p: 'xl',
    flexDir: 'column',
    flexWrap: 'nowrap',
    rounded: 'none',
    shadow: 'none',
    shadowColor: 'gray900',
    position: 'relative',
    bgMode: 'cover',
    pointerEvents: 'auto',
    row: false,
    borderStyle: 'solid',
  });

  const { expanded, children } = props;
  const startingHeight = 0;

  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] =
    useState<number>(startingHeight);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  React.useEffect(() => {
    if (expanded) {
      Animated.timing(animatedController, {
        useNativeDriver: false,
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    } else {
      Animated.timing(animatedController, {
        useNativeDriver: false,
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    }
  }, [animatedController, expanded]);

  const onLayout = (e: LayoutChangeEvent) => {
    const height = e.nativeEvent.layout.height;
    setBodySectionHeight(height);
  };

  return (
    <Animated.View style={{ height: bodyHeight, overflow: 'hidden' }}>
      <Div {...props} onLayout={onLayout}>
        {children}
      </Div>
    </Animated.View>
  );
};

// CollapseBody.defaultProps = {
//   bg: 'transparent',
//   p: 'xl',
//   flexDir: 'column',
//   flexWrap: 'nowrap',
//   rounded: 'none',
//   shadow: 'none',
//   shadowColor: 'gray900',
//   position: 'relative',
//   bgMode: 'cover',
//   pointerEvents: 'auto',
//   row: false,
//   borderStyle: 'solid',
// };

export { CollapseBody };
