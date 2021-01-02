import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-magnus';

import HomeScreen from './HomeScreen';
import { components, pages } from './items';

const theme = {
  colors: {
    loginExample1Bg: '#F3CFDA',
    brown100: '#865c6c',
    twitter: '#1DA1F2',
    facebook: '#3b5998',
    google: '#4285F4',
    dribbble: '#ea4c88',
  },
};

const Stack = createStackNavigator();
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={HomeScreen} />

          {pages.map((page) => {
            return (
              <Stack.Screen
                key={`page-${page.onScreenName}`}
                name={page.navigationPath}
                component={page.component}
              />
            );
          })}

          {components.map((component) => {
            return (
              <Stack.Screen
                key={`page-${component.onScreenName}`}
                name={component.navigationPath}
                component={component.component}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
