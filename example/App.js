import React from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import {
  Div,
  Text,
  ThemeProvider,
  Button,
  Image,
  Badge,
  Input,
  Icon,
  Header,
  Host,
  Fab,
  Portal,
  Checkbox,
  Radio,
  RadioGroup,
} from 'react-native-magnus';

const friends = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1927&q=80',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1516640997890-5e4c83df8419?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
];

const App = () => {
  const [radioValue1, setRadioValue1] = React.useState(null);
  const [checkboxValue, setCheckboxValue] = React.useState([1]);
  const [checked, setChecked] = React.useState(false);

  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Host>
          <Div m="lg">
            <Div>
              <Checkbox.Group row onChange={setCheckboxValue}>
                {['Pepproni', 'Cheese', 'Olive'].map((value) => (
                  <Checkbox value={value} mr="md" key={value}>
                    {({checked}) => (
                      <Div
                        bg={checked ? 'blue700' : 'gray300'}
                        py="md"
                        px="xl"
                        rounded="circle">
                        <Text color={checked ? 'white' : 'gray800'}>
                          {value}
                        </Text>
                      </Div>
                    )}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <Checkbox.Group row onChange={setCheckboxValue} mt="lg">
                {['Pepproni', 'Cheese', 'Olive'].map((value) => (
                  <Checkbox value={value} mr="md" key={value} />
                ))}
              </Checkbox.Group>
              <Radio.Group row onChange={setCheckboxValue} mt="md">
                {['Pepproni', 'Cheese', 'Olive'].map((value) => (
                  <Radio value={value} mr="md" key={value} />
                ))}
              </Radio.Group>
            </Div>
          </Div>
        </Host>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
