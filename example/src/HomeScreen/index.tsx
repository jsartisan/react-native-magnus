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
  Toggle,
  Icon,
  useTheme,
} from 'react-native-magnus';

import { useNavigation } from '@react-navigation/native';
import { components, pages } from '../items';
import { darkTheme, lightTheme, saveThemeName } from '../themes';
import { styles } from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Div flex={1} bg="screenBg">
          {/* header */}
          <Header
            suffix={
              <Div mr="lg" row>
                <Div
                  row
                  justifyContent="space-between"
                  alignItems="center"
                  mr="lg"
                >
                  <Icon
                    name="moon"
                    fontFamily="FontAwesome5"
                    fontSize="xl"
                    mr="md"
                  />
                  <Toggle
                    h={25}
                    w={40}
                    on={theme.name === 'dark'}
                    onPress={() => {
                      saveThemeName(
                        theme.name === 'dark'
                          ? lightTheme.name!
                          : darkTheme.name!
                      );
                      setTheme(theme.name === 'dark' ? lightTheme : darkTheme);
                    }}
                  />
                </Div>

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
                        uri:
                          'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=80',
                      }}
                    />
                  </Button>
                </Badge>
              </Div>
            }
          >
            <Div>
              <Text
                fontWeight="bold"
                fontSize="xl"
                textTransform="uppercase"
                color="textDark"
              >
                Explore
              </Text>
              <Text color="gray500">Magnus UI Components</Text>
            </Div>
          </Header>

          {/* list */}
          <ScrollView>
            <Div mt="xl" px="xl">
              <Text pb="lg" fontSize="3xl" color="textDark">
                Screens
              </Text>

              {pages.map((item) => (
                <Button
                  key={item.navigationPath}
                  block
                  py="lg"
                  mb="lg"
                  bg="card"
                  color="textDark"
                  onPress={() => navigation.navigate(item.navigationPath)}
                >
                  {item.onScreenName}
                </Button>
              ))}
            </Div>

            <Div mt="xl" px="xl">
              <Text pb="lg" fontSize="3xl" color="textDark">
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
                    bg="card"
                    color="textDark"
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
