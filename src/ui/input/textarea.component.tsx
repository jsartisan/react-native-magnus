import * as React from 'react';
import { useState } from 'react';
import {
  View as RNView,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInput as RNTextInput,
} from 'react-native';

import { getStyle } from './input.style';
import { TextareaProps } from './textarea.type';
import { useTheme } from '../../theme';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Textarea: React.FunctionComponent<TextareaProps> = (incomingProps) => {
  const props = useDefaultProps('Textarea', incomingProps, {
    minH: 100,
    p: 'lg',
    borderColor: 'gray500',
    borderWidth: 1,
    multiline: true,
    textAlignVertical: 'top',
  });

  const {
    h,
    w,
    m,
    minH,
    minW,
    suffix,
    prefix,
    style,
    onBlur,
    onFocus,
    children,
    focusBorderColor,
    ...rest
  } = props;
  const { theme } = useTheme();
  const [isFocussed, setIsFocussed] = useState(false);
  const computedStyle = getStyle(theme, props, { isFocussed });

  /**
   * on focus input
   */
  const onFocusInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocussed(true);

    if (onFocus) {
      onFocus(e);
    }
  };

  /**
   * on blur input
   * @param e
   */
  const onBlurInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocussed(false);

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <RNView style={computedStyle.container}>
      <RNTextInput
        onFocus={(e) => onFocusInput(e)}
        onBlur={(e) => onBlurInput(e)}
        style={computedStyle.input}
        {...rest}
      />
    </RNView>
  );
};

// Textarea.defaultProps = {
//   minH: 100,
//   p: 'lg',
//   borderColor: 'gray500',
//   borderWidth: 1,
// };

export { Textarea };
