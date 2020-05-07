import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Magnus from 'react-native-magnus';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Magnus}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
