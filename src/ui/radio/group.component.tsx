import * as React from 'react';
import { useState } from 'react';

import { Div } from '../div/div.component';
import { DivProps } from '../div/div.type';

interface ButtonProps extends DivProps {
  onChange?: (value: any) => void;
  value?: any;
  defaultValue?: any;
  children: React.ReactElement[] | React.ReactElement;
}

const RadioGroup: React.FunctionComponent<ButtonProps> = (props) => {
  const [value, setValue] = useState(props.value || props.defaultValue || null);
  const {
    children,
    onChange: onChangeProp,
    value: propsValue,
    ...rest
  } = props;

  /**
   * checks if checked value is already in the state or not,
   * if it, remove it else add it
   *
   * @param value
   */
  const onChange = (optionValue: any) => {
    if (!('value' in props)) {
      setValue(optionValue);
    }

    if (onChangeProp) {
      onChangeProp(optionValue);
    }
  };

  /**
   * clones the children and add checked, onChange prop
   */
  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactElement) => {
      return React.cloneElement(child, {
        onChange,
        checked: value === child.props.value,
      });
    });
  };

  return <Div {...rest}>{renderChildren()}</Div>;
};

export { RadioGroup };
