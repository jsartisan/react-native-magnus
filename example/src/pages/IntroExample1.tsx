import React from 'react';
import { Button, Carousel, Div, Fab, Icon, Text } from 'react-native-magnus';
import ExamplePage from '../utils/ExamplePage';

const IntroExample1: React.FC = () => {
  return (
    <ExamplePage>
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
          <Div flex={1} bg="pink200" px="2xl">
            <Div flex={1} justifyContent="center">
              <Text fontSize="5xl">Welcome to our app</Text>
              <Text fontSize="xl">Welcome to our app</Text>
            </Div>
          </Div>
        </Carousel.Item>
        <Carousel.Item>
          <Div flex={1} bg="green200">
            <Text>2</Text>
          </Div>
        </Carousel.Item>

        <Carousel.Item>
          <Div flex={1} bg="blue200">
            <Text>3</Text>
          </Div>
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
    </ExamplePage>
  );
};

export default IntroExample1;
