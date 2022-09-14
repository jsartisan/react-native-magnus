import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar, Div } from 'react-native-magnus';

interface ExamplePageProps {
  children: ReactNode;
}

const ExamplePage = ({ children }: ExamplePageProps) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <SafeAreaView style={{ flex: 1 }}>
        <Div bg="screenBg" flex={1}>
          {children}
        </Div>
      </SafeAreaView>
    </>
  );
};

export default ExamplePage;
