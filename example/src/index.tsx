import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Snackbar, ThemeProvider } from 'react-native-magnus';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import HomeScreen from './HomeScreen';
import { components, pages } from './items';
import { darkTheme, getThemeName, lightTheme } from './themes';

const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [themeName, setThemeName] = React.useState('light');
  const [fontsLoaded] = useFonts({
    'Inconsolata-Regular': require('../assets/fonts/Inconsolata-Regular.ttf'),
  });

  React.useEffect(() => {
    async function getTheme() {
      getThemeName()
        .then((theme) => setThemeName(theme))
        .catch((err) => console.error(err));
    }

    getTheme();
  }, []);

  React.useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <ThemeProvider theme={themeName === 'dark' ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
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
      <Snackbar
        px="xl"
        py="lg"
        ref={(ref) => (global.toast = ref)}
        color="white"
        fontSize="lg"
        duration={2000}
      />
    </ThemeProvider>
  );
};

export default App;
