import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, ThemeType } from 'react-native-magnus';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import HomeScreen from './HomeScreen';
import { components, pages } from './items';

const theme: Partial<ThemeType> = {
  fontFamily: {
    normal: 'OpenSans-Regular',
    bold: 'OpenSans-Bold',
  },

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
      fontSize: 'lg',
      textTransform: 'uppercase',
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
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    'OpenSans-ExtraBold': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
    'OpenSans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
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
