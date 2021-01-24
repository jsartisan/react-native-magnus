import * as React from 'react';
import { GestureResponderEvent as RNGestureResponderEvent } from 'react-native';

import { DropdownOptionProps } from './dropdown.option.type';
import { Button } from '../button/button.component';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const DropdownOption: React.FunctionComponent<DropdownOptionProps> = (
  incomingProps
) => {
  const props = useDefaultProps('DropdownOption', incomingProps, {
    onSelect: () => {},
    rounded: 0,
    bg: 'white',
    py: 'lg',
    px: '2xl',
    block: true,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  });

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
    <Button {...rest} onPress={onPress}>
      {children}
    </Button>
  );
};

// DropdownOption.defaultProps = {
//   onSelect: () => {},
//   rounded: 0,
//   bg: 'white',
//   p: 0,
//   color: 'black',
//   alignItems: 'flex-start',
//   justifyContent: 'flex-start',
// };

export { DropdownOption };
