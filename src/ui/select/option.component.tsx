import * as React from "react";
import { TouchableHighlightProps as RNButtonProps } from "react-native";

import { Button } from "../button/button.component";

interface TextInputProps extends RNButtonProps {
  m?: any;
  p?: any;
  center?: boolean;
  value: any;
  onSelect?: (value: any) => void;
  children?: React.ReactElement[] | React.ReactElement;
}

type Ref = {};

const Option = React.forwardRef<Ref, TextInputProps>(props => {
  const { children, center, value, onSelect, ...rest } = props;

  /**
   * on press select
   *
   * @param e
   */
  const onPress = () => {
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <Button {...rest} onPress={onPress} center={center} block>
      {children}
    </Button>
  );
});

Option.defaultProps = {
  onSelect: () => {},
  center: false
};

export { Option };
