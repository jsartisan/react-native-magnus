import * as React from 'react';

import { Div } from '../div/div.component';
import { CollapseBodyProps } from './collapse.type';

const CollapseBody: React.FunctionComponent<CollapseBodyProps> = (
  props: CollapseBodyProps
) => {
  return <Div {...props} />;
};

CollapseBody.defaultProps = {
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
};

export { CollapseBody };
