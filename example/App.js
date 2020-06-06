import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Text, ThemeProvider} from 'react-native-magnus';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text textAlign="center" mt="2xl">
          Hello World
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
