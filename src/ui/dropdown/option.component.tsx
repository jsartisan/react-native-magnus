import * as React from 'react';

import { GestureResponderEvent as RNGestureResponderEvent } from 'react-native';
import { OptionProps } from './option.type';
import { Button } from '../button/button.component';

const Option: React.FunctionComponent<OptionProps> = props => {
  const { children, value, onPress: onPressProp, onSelect, ...rest } = props;

  /**
   * on press select option
   *
   * @param e
   */
  const onPress = (event: RNGestureResponderEvent) => {
    if (onSelect) {
      onSelect(value);
    }

    if (onPressProp) {
      onPressProp(event);
    }
  };

  return (
    <Button {...rest} onPress={onPress} block>
      {children}
    </Button>
  );
};

Option.defaultProps = {
  onSelect: () => {},
  rounded: 0,
  bg: 'white',
  p: 0,
  color: 'black',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  center: false,
};

export { Option };
