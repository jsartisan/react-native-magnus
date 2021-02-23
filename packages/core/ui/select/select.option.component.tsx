import * as React from 'react';
import { GestureResponderEvent as RNGestureResponderEvent } from 'react-native';

import { Div } from '../div/div.component';
import { Icon } from '../icon/icon.component';
import { Text } from '../text/text.component';
import { SelectOptionProps } from './select.option.type';
import { Button } from '../button/button.component';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const SelectOption: React.FunctionComponent<SelectOptionProps> = (
  incomingProps
) => {
  const props = useDefaultProps('SelectOption', incomingProps, {
    onSelect: () => {},
    rounded: 0,
    bg: 'white',
    px: 'xl',
    py: 'lg',
    color: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    center: false,
    prefix: (
      <Icon
        name="ios-checkmark-circle"
        fontFamily="Ionicons"
        fontSize="2xl"
        color="green600"
        mr="md"
      />
    ),
  });

  const {
    children,
    value,
    prefix,
    onPress: onPressProp,
    onSelect,
    selectedValue,
    ...rest
  } = props;
  const isSelected = Array.isArray(selectedValue)
    ? selectedValue.includes(value)
    : selectedValue === value;

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

  /**
   * render suffix
   */
  const renderPrefix = () => {
    if (isSelected) {
      return prefix;
    }

    return null;
  };

  const renderChildren = () => {
    if (typeof children === 'string') {
      return <Text>{children}</Text>;
    }

    return children;
  };

  return (
    <Button {...rest} onPress={onPress} block alignItems="center">
      {prefix && <Div minW="8%">{renderPrefix()}</Div>}
      <Div flex={1} bg="transparent">
        {renderChildren()}
      </Div>
    </Button>
  );
};

// Option.defaultProps = {
//   onSelect: () => {},
//   rounded: 0,
//   bg: 'white',
//   p: 0,
//   color: 'black',
//   alignItems: 'flex-start',
//   justifyContent: 'flex-start',
//   center: false,
// };

export { SelectOption };
