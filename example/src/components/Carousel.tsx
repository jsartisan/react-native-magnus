import React from 'react';
import { ScrollView } from 'react-native';
import { Carousel, Div, DivProps, Text } from 'react-native-magnus';

import ExampleHeader from '../utils/ExampleHeader';
import ExamplePage from '../utils/ExamplePage';
import ExampleSection from '../utils/ExampleSection';

const CarouselComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="carousel" />

      <ScrollView>
        <ExampleSection name="default">
          <Card>
            <Carousel>
              <Carousel.Item>
                <Div p="xl">
                  <Text textTransform="uppercase" fontWeight="bold">
                    Title
                  </Text>
                  <Text>This is a content card</Text>
                </Div>
              </Carousel.Item>
              <Carousel.Item>
                <Div p="xl">
                  <Text>2</Text>
                </Div>
              </Carousel.Item>

              <Text>2</Text>
            </Carousel>
          </Card>
        </ExampleSection>

        <ExampleSection name="no indicators">
          <Card>
            <Carousel showIndicators={false}>
              <Carousel.Item>
                <Div p="xl">
                  <Text textTransform="uppercase" fontWeight="bold">
                    Title
                  </Text>
                  <Text>This is a content card</Text>
                </Div>
              </Carousel.Item>
              <Carousel.Item>
                <Div p="xl">
                  <Text>2</Text>
                </Div>
              </Carousel.Item>

              <Text>2</Text>
            </Carousel>
          </Card>
        </ExampleSection>

        <ExampleSection name="custom indicators">
          <Carousel
            renderIndicators={({ totalPages, selectedPage }) => (
              <Div flex={1} alignItems="center">
                <Text fontSize="xl">
                  Pages: {selectedPage}/{totalPages}
                </Text>
              </Div>
            )}
          >
            <Carousel.Item>
              <Div p="xl">
                <Text>1</Text>
              </Div>
            </Carousel.Item>
            <Carousel.Item>
              <Div p="xl">
                <Text>2</Text>
              </Div>
            </Carousel.Item>
          </Carousel>

          <Card mt="xl">
            <Carousel
              renderIndicators={({ totalPages, selectedPage }) => (
                <Div flex={1} position="absolute" right={10} top={6}>
                  <Text>
                    {selectedPage}/{totalPages}
                  </Text>
                </Div>
              )}
            >
              <Carousel.Item>
                <Div p="xl">
                  <Text>1</Text>
                </Div>
              </Carousel.Item>
              <Carousel.Item>
                <Div p="xl">
                  <Text>2</Text>
                </Div>
              </Carousel.Item>
            </Carousel>
          </Card>

          <Card mt="xl" bg="black" rounded="sm">
            <Carousel
              renderIndicators={({ totalPages, selectedPage }) => (
                <Div
                  w="100%"
                  position="absolute"
                  alignItems="center"
                  justifyContent="center"
                  bottom={10}
                  row
                >
                  {Array(totalPages)
                    .fill(0)
                    .map((_, index) => {
                      index++;

                      return (
                        <Div
                          w={20}
                          h={7}
                          rounded="circle"
                          bg={selectedPage === index ? 'white' : 'gray700'}
                          mx="xs"
                          key={index}
                        />
                      );
                    })}
                </Div>
              )}
            >
              <Carousel.Item>
                <Div p="xl">
                  <Text color="white">1</Text>
                </Div>
              </Carousel.Item>
              <Carousel.Item>
                <Div p="xl">
                  <Text color="white">2</Text>
                </Div>
              </Carousel.Item>
            </Carousel>
          </Card>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

const Card: React.FC<DivProps> = (props) => {
  return <Div bg="white" shadow="sm" {...props} />;
};

export default CarouselComponent;
