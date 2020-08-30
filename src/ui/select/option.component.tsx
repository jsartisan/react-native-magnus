import * as React from 'react';

import { GestureResponderEvent as RNGestureResponderEvent } from 'react-native';
import { OptionProps } from './option.type';
import { Button } from '../button/button.component';
import { Div } from '../div/div.component';
import { Icon } from '../icon/icon.component';
import { Text } from '../text/text.component';

const Option: React.FunctionComponent<OptionProps> = (props) => {
  const {
    children,
    suffix,
    value,
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
  const renderSuffix = () => {
    if (suffix && isSelected) {
      if (typeof suffix === 'string') {
        return (
          <Icon name={suffix} fontSize="text500" color="green600" mr="md" />
        );
      }

      return suffix;
    }

    if (isSelected) {
      return <Icon name="check" fontSize="text500" color="green600" mr="md" />;
    }

    return false;
  };

  const renderChildren = () => {
    if (typeof children === 'string') {
      return <Text>{children}</Text>;
    }

    return children;
  };
  return (
    <Button {...rest} onPress={onPress} block alignItems="center">
      <Div flex={1} bg="transparent">
        {renderChildren()}
      </Div>
      {renderSuffix()}
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
