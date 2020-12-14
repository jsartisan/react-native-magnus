import * as React from 'react';
import { useState } from 'react';

import { Div } from '../div/div.component';
import { DivProps } from '../div/div.type';

interface ButtonProps extends DivProps {
  onChange?: (value: any) => void;
  defaultActive?: string | number;
  children: React.ReactElement[] | React.ReactElement;
}

const CollapseGroup: React.FunctionComponent<ButtonProps> = (props) => {
  const [active, setActive] = useState(props.defaultActive || null);
  const { children, onChange: onChangeProp, ...rest } = props;

  /**
   * checks if checked value is already in the state or not,
   * if it, remove it else add it
   *
   * @param value
   */
  const onChange = (optionId: any) => {
    setActive(optionId);

    if (onChangeProp) {
      onChangeProp(optionId);
    }
  };

  /**
   * clones the children and add checked, onChange prop
   */
  const renderChildren = () => {
    return React.Children.map(children, (child: React.ReactElement) => {
      return React.cloneElement(child, {
        onChange,
        active: active === child.props.id,
      });
    });
  };

  return <Div {...rest}>{renderChildren()}</Div>;
};

export { CollapseGroup };
