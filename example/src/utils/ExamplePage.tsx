import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native-magnus';

const ExamplePage: React.FC = ({ children }) => {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </>
  );
};

export default ExamplePage;
