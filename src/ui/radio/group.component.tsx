import * as React from 'react';
import { useState } from 'react';

import { RadioGroupProps } from './radio.type';
import { Div } from '../div/div.component';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const RadioGroup: React.FunctionComponent<RadioGroupProps> = (
  incomingProps
) => {
  const props = useDefaultProps('RadioGroup', incomingProps, {});

  const [value, setValue] = useState(props.value ?? props.defaultValue ?? null);
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
