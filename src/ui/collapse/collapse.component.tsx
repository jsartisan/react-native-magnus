import * as React from 'react';
import { useState } from 'react';
import { LayoutAnimation } from 'react-native';

import { Div } from '../div/div.component';
import { CollapseBody } from './collapse.body.component';
import { CollapseHeader } from './collapse.header.component';
import { CollapseProps, CompoundedCollapse } from './collapse.type';

const Collapse: CompoundedCollapse<CollapseProps> = (props) => {
  const { children, defaultActive, ...rest } = props;
  const [active, setActive] = useState(defaultActive);
  let header = null;
  let body = null;

  React.Children.forEach(children, (child) => {
    // @ts-ignore
    if (child.type === CollapseHeader) {
      header = child;
      // @ts-ignore
    } else if (child.type === CollapseBody) {
      body = child;
    }
  });

  if (header === null) {
    throw Error(
      "header wasn't found to be rendered. Please make sure you have wrapped an Collapse.Header in the Collapse Component."
    );
  }

  header = React.cloneElement(header, {
    onPress: () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setActive(!active);
    },
    active,
  });

  return (
    <Div {...rest}>
      {header}
      {active && body}
    </Div>
  );
};

Collapse.defaultProps = {
  bg: 'transparent',
  flexDir: 'column',
  flexWrap: 'nowrap',
  rounded: 'none',
  shadow: 'none',
  shadowColor: 'gray900',
  position: 'relative',
  bgMode: 'cover',
  pointerEvents: 'auto',
  row: false,
  borderStyle: 'solid',
  defaultActive: false,
};

Collapse.Body = CollapseBody;
Collapse.Header = CollapseHeader;

export { Collapse };
