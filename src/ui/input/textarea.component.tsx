import * as React from "react";
import { useContext, useState } from "react";
import {
  View as RNView,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps
} from "react-native";

import { getStyle } from "./input.style";
import { ThemeContext } from "../../theme";

interface TextInputProps extends RNTextInputProps {
  h?: number;
  w?: number;
  m?: any;
  p?: any;
  borderColor?: string;
  focusBorderColor?: string;
  borderWidth?: number;
  borderRadius?: any;
  minW?: number | string;
  minH?: number | string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

const Textarea: React.FunctionComponent<TextInputProps> = props => {
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
    borderColor,
    borderWidth,
    borderRadius,
    focusBorderColor,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);
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
        multiline
        textAlignVertical="top"
        onFocus={e => onFocusInput(e)}
        onBlur={e => onBlurInput(e)}
        style={computedStyle.input}
        {...rest}
      />
    </RNView>
  );
};

Textarea.defaultProps = {
  minH: 100,
  p: { x: 12 },
  borderColor: "gray500",
  borderWidth: 1
};

export { Textarea };
