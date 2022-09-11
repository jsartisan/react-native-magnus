import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import {
  Badge,
  Button,
  Div,
  Header,
  Host,
  Icon,
  Image,
  Input,
  Text,
} from 'react-native-magnus';
import ExamplePage from '../utils/ExamplePage';

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

const HomeExample1: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ExamplePage>
      <Host>
        <Div flex={1}>
          {/* header */}
          <Div bg="card" shadow="lg">
            <Header
              shadow="none"
              prefix={
                <Button bg="card" mr="lg" onPress={() => navigation.goBack()}>
                  <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
                </Button>
              }
              suffix={
                <Div mr="lg">
                  <Badge
                    bg="green500"
                    zIndex={10}
                    right={-5}
                    top={0}
                    h={12}
                    w={12}
                  >
                    <Button
                      bg="gray200"
                      p="none"
                      rounded="circle"
                      onPress={() => {}}
                    >
                      <Image
                        h={40}
                        w={40}
                        source={{
                          uri: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80',
                        }}
                      />
                    </Button>
                  </Badge>
                </Div>
              }
            >
              <Div>
                <Text fontWeight="bold" fontSize="2xl" color="textDark">
                  Explore
                </Text>
                <Text color="gray500">My friends</Text>
              </Div>
            </Header>

            {/* input box */}
            <Input
              suffix={
                <Icon
                  name="search"
                  color="gray500"
                  fontSize="xl"
                  fontFamily="FontAwesome"
                />
              }
              mx="xl"
              mb="lg"
              py="md"
              px="lg"
              fontSize="lg"
              borderWidth={0}
              placeholder="Search your doge homies"
              bg="screenBg"
              color="textDark"
            />
          </Div>

          {/* list */}
          <Div flex={1} px="xl">
            <FlatList
              showsVerticalScrollIndicator={false}
              data={friends}
              keyExtractor={(item) => `friend-list-item-${item.id}`}
              renderItem={({ item }) => (
                <Div pt="lg" pb="lg">
                  <Image
                    source={{ uri: item.image }}
                    h={120}
                    w="100%"
                    rounded="xl"
                    bg="gray200"
                    resizeMode="cover"
                  />
                </Div>
              )}
            />
          </Div>
        </Div>
      </Host>
    </ExamplePage>
  );
};

export default HomeExample1;
