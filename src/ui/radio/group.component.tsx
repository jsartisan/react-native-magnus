import * as React from "react";

import { Div } from "../div/div.component";
import { DivProps } from "../div/div.type";

interface ButtonProps extends DivProps {
  onChange?: any;
  value?: any;
  children: React.ReactElement[] | React.ReactElement;
}

const RadioGroup: React.FunctionComponent<ButtonProps> = props => {
  const { children, onChange, value, ...rest } = props;

  /**
   * clones the children and add currentValue
   */
  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactElement) => {
      return React.cloneElement(child, {
        currentValue: value,
        onChange
      });
    });
  };

  return <Div {...rest}>{renderChildren()}</Div>;
};

export { RadioGroup };
