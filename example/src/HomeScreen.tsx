import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
  Div,
  Text,
  Button,
  Image,
  Badge,
  Header,
  StatusBar,
} from 'react-native-magnus';

import { useNavigation } from '@react-navigation/native';
import { components, pages } from './items';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Div flex={1}>
          {/* header */}
          <Header
            shadow="lg"
            suffix={
              <Badge bg="green500" zIndex={10} right={-5} top={0} h={12} w={12}>
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
                      uri:
                        'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80',
                    }}
                  />
                </Button>
              </Badge>
            }
          >
            <Div>
              <Text fontWeight="bold" fontSize="xl" textTransform="uppercase">
                Explore
              </Text>
              <Text color="gray700">Magnus UI Components</Text>
            </Div>
          </Header>

          {/* list */}
          <ScrollView>
            <Div mt="xl" px="xl">
              <Text pb="lg" fontSize="3xl">
                Screens
              </Text>

              {pages.map((item) => (
                <Button
                  key={item.navigationPath}
                  block
                  py="lg"
                  mb="lg"
                  bg="white"
                  color="black"
                  onPress={() => navigation.navigate(item.navigationPath)}
                >
                  {item.onScreenName}
                </Button>
              ))}
            </Div>

            <Div mt="xl" px="xl">
              <Text pb="lg" fontSize="3xl">
                Components
              </Text>
              <Div flexWrap="wrap" flexDir="row">
                {components.map((item, index) => (
                  <Button
                    key={item.navigationPath}
                    w="48%"
                    ml={index % 2 ? 'lg' : 'none'}
                    py="lg"
                    mb="lg"
                    bg="white"
                    color="black"
                    onPress={() => navigation.navigate(item.navigationPath)}
                  >
                    {item.onScreenName}
                  </Button>
                ))}
              </Div>
            </Div>
          </ScrollView>
        </Div>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
