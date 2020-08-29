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
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Div mx="xl" flex={1}>
          {/* header */}
          <Div row mt="xl" alignItems="center">
            <Div flexGrow={1}>
              <Text fontWeight="bold" fontSize="2xl">
                Explore
              </Text>
              <Text color="gray700" mt="md" mb="sm">
                My friends
              </Text>
            </Div>
            <Badge bg="green500" zIndex={10} right={-5} top={0} h={12} w={12}>
              <Button p="none" rounded="circle" onPress={() => {}}>
                <Image
                  h={40}
                  w={40}
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80',
                  }}
                />
              </Button>
            </Badge>
          </Div>
          {/* input box */}
          <Input
            suffix={
              <Icon
                name="search"
                color="gray700"
                fontSize="title"
                fontFamily="FontAwesome"
              />
            }
            p="md"
            fontSize="lg"
            borderWidth={0}
            placeholder="Search your doge homies"
            mt="lg"
            bg="gray100"
          />
          {/* list */}
          <Div mt="xl" flex={1}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={friends}
              renderItem={({item}) => (
                <Image
                  source={{uri: item.image}}
                  h={120}
                  w="100%"
                  resize
                  rounded="xl"
                  mb="xl"
                  resizeMode="center"
                />
              )}
              keyExtractor={(item) => `friend-list-item-${item.id}`}
            />
          </Div>
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
