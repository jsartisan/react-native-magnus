import * as React from 'react';
import { Div, Text, ThemeProvider } from 'react-native-magnus';

export default function App() {
  return (
    <ThemeProvider>
      <Div flex={1} alignItems="center" justifyContent="center">
        <Text>Hello World</Text>
      </Div>
    </ThemeProvider>
  );
}
