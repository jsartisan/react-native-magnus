import React, { FC } from 'react';
import { render } from 'react-native-testing-library';

import { ThemeProvider } from '../../theme';
import { Div } from './div.component';
import { DivProps } from './div.type';
import { Text } from '../text/text.component';

describe('Div component', () => {
  const TestDiv: FC<DivProps> = (props) => (
    <ThemeProvider>
      <Div {...props} />
    </ThemeProvider>
  );

  it('should render component passed to children', () => {
    const component = render(
      <TestDiv>
        <Text>I love magnus ui</Text>
      </TestDiv>
    );

    expect(component.queryByText('I love magnus ui')).toBeTruthy();
  });
});
