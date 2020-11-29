import React, {useState, useRef} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {
  Div,
  ThemeProvider,
  Radio,
  Text,
  Select,
  Button,
  Modal,
  Icon,
  Dropdown,
} from 'react-native-magnus';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <Button
          block
          bg="pink500"
          mt="sm"
          p="md"
          color="white"
          onPress={() => setVisible(true)}>
          Open Dropdown
        </Button>

        <Dropdown.Container
          isVisible={visible}
          title={
            <Text mx="xl" color="gray500" pb="md">
              This is your title
            </Text>
          }
          mt="md"
          pb="2xl"
          showSwipeIndicator={true}
          roundedTop="xl">
          <Dropdown.Option py="md" px="xl" block>
            First Option
          </Dropdown.Option>
          <Dropdown.Option py="md" px="xl" block>
            Second Option
          </Dropdown.Option>
          <Dropdown.Option py="md" px="xl" block>
            Third Option
          </Dropdown.Option>
        </Dropdown.Container>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
