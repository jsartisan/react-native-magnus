import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-magnus';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import HomeScreen from './HomeScreen';
import { components, pages } from './items';
import { darkTheme, getThemeName, lightTheme } from './themes';

const Stack = createStackNavigator();
const App = () => {
  const [themeName, setThemeName] = React.useState('light');

  React.useEffect(() => {
    async function getTheme() {
      getThemeName()
        .then((theme) => setThemeName(theme))
        .catch((err) => console.error(err));
    }

    getTheme();
  }, []);

  let [fontsLoaded] = useFonts({
    'Inconsolata-Regular': require('../assets/fonts/Inconsolata-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={themeName === 'dark' ? darkTheme : lightTheme}>
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
