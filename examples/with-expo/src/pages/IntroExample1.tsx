import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Carousel, Div, Icon, StatusBar } from 'react-native-magnus';
import ExamplePage from '../utils/ExamplePage';

const IntroExample1: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ExamplePage>
      <StatusBar translucent backgroundColor="transparent" />
      <Carousel
        flex={1}
        renderIndicators={({ totalPages, selectedPage }) => (
          <Div
            w="100%"
            position="absolute"
            alignItems="center"
            justifyContent="center"
            bottom={20}
            row
          >
            {Array(totalPages)
              .fill(0)
              .map((_, index) => {
                return (
                  <Div
                    w={32}
                    h={6}
                    rounded="circle"
                    bg={selectedPage === index + 1 ? 'black' : 'white'}
                    mx="xs"
                    key={index}
                  />
                );
              })}
          </Div>
        )}
      >
        <Carousel.Item>
          <Div flex={1} bg="pink200" />
        </Carousel.Item>

        <Carousel.Item>
          <Div flex={1} bg="green200" />
        </Carousel.Item>

        <Carousel.Item>
          <Div flex={1} bg="blue200" />
        </Carousel.Item>
      </Carousel>

      <Button
        position="absolute"
        rounded="circle"
        fontSize="6xl"
        shadow="xl"
        p="xl"
        shadowColor="red500"
        bottom={25}
        right={25}
      >
        <Icon name="right" color="white" fontSize="xl" />
      </Button>

      <Button
        position="absolute"
        top={40}
        left={20}
        bg="gray100"
        mt="md"
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="arrow-left"
          color="blue500"
          fontFamily="Feather"
          fontSize="2xl"
        />
      </Button>
    </ExamplePage>
  );
};

export default IntroExample1;
