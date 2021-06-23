import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar, Div } from 'react-native-magnus';
import { styles } from '../../../../src/ui/badge/badge.style';

const ExamplePage: FC = ({ children }) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Div bg="screenBg" flex={1}>
          {children}
        </Div>
      </SafeAreaView>
    </>
  );
};

export default ExamplePage;
