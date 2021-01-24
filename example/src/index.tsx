import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, ThemeType } from 'react-native-magnus';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import HomeScreen from './HomeScreen';
import { components, pages } from './items';

const theme: Partial<ThemeType> = {
  components: {
    Text: {
      fontSize: 'lg',
    },
    Button: {
      fontSize: 'lg',
      textTransform: 'capitalize',
      bg: 'gray600',
    },
    Input: {
      fontSize: 'xl',
    },
    Fab: {
      bg: 'red500',
    },
  },

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
  let [fontsLoaded] = useFonts({
    'PlayfairDisplay-Bold': require('../assets/fonts/PlayfairDisplay-Bold.ttf'),
    'PlayfairDisplay-Regular': require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
    'Inconsolata-Regular': require('../assets/fonts/Inconsolata-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
  }
};

export default App;
