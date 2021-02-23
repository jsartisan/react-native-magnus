import * as React from 'react';
import { useState } from 'react';
import { useDefaultProps } from '../../utilities/useDefaultProps';

import { Div } from '../div/div.component';
import { CheckboxGroupProps } from './checkbox.type';

const CheckboxGroup: React.FunctionComponent<CheckboxGroupProps> = (
  incomingProps
) => {
  const props = useDefaultProps('CheckboxGroup', incomingProps, {});

  const [value, setValue] = useState(props.value ?? props.defaultValue ?? []);
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
    const optionIndex = value.indexOf(optionValue);
    const newValue = [...value];

    if (optionIndex === -1) {
      newValue.push(optionValue);
    } else {
      newValue.splice(optionIndex, 1);
    }

    if (!('value' in props)) {
      setValue(newValue);
    }

    if (onChangeProp) {
      onChangeProp(newValue);
    }
  };

  /**
   * clones the children and add checked, onChange prop
   */
  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactElement) => {
      return React.cloneElement(child, {
        onChange,
        checked: value.indexOf(child.props.value) > -1,
      });
    });
  };

  return <Div {...rest}>{renderChildren()}</Div>;
};

export { CheckboxGroup };
