import React from 'react';
import { ScrollView } from 'react-native';
import { Div, Text } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const TextComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="text" />

      <ScrollView>
        <Text textAlign={['right', 'center']}>asdasdas</Text>
        <Div flexDir="row">
          <ExampleSection name="default">
            <Text color="gray800" fontSize="xs">
              Text size: xs
            </Text>
            <Text color="gray800" fontSize="sm">
              Text size: sm
            </Text>
            <Text color="gray800" fontSize="md">
              Text size: md
            </Text>
            <Text color="gray800" fontSize="lg">
              Text size: lg
            </Text>
            <Text color="gray800" fontSize="xl">
              Text size: xl
            </Text>
            <Text color="gray800" fontSize="2xl">
              Text size: 2xl
            </Text>
            <Text color="gray800" fontSize="3xl">
              Text size: 3xl
            </Text>
            <Text color="gray800" fontSize="4xl">
              Text size: 4xl
            </Text>
          </ExampleSection>

          <ExampleSection name="bold">
            <Text color="gray800" fontSize="xs" fontWeight="bold">
              Text size: xs
            </Text>
            <Text color="gray800" fontSize="sm" fontWeight="bold">
              Text size: sm
            </Text>
            <Text color="gray800" fontSize="md" fontWeight="bold">
              Text size: md
            </Text>
            <Text color="gray800" fontSize="lg" fontWeight="bold">
              Text size: lg
            </Text>
            <Text color="gray800" fontSize="xl" fontWeight="bold">
              Text size: xl
            </Text>
            <Text color="gray800" fontSize="2xl" fontWeight="bold">
              Text size: 2xl
            </Text>
            <Text color="gray800" fontSize="3xl" fontWeight="bold">
              Text size: 3xl
            </Text>
            <Text color="gray800" fontSize="4xl" fontWeight="bold">
              Text size: 4xl
            </Text>
          </ExampleSection>
        </Div>

        <ExampleSection name="uppercase + colored">
          <Text color="red500" fontSize="xs" textTransform="uppercase">
            Text size: xs
          </Text>
          <Text color="red500" fontSize="sm" textTransform="uppercase">
            Text size: sm
          </Text>
          <Text color="red500" fontSize="md" textTransform="uppercase">
            Text size: md
          </Text>
          <Text color="red500" fontSize="lg" textTransform="uppercase">
            Text size: lg
          </Text>
          <Text color="red500" fontSize="xl" textTransform="uppercase">
            Text size: xl
          </Text>
          <Text color="red500" fontSize="2xl" textTransform="uppercase">
            Text size: 2xl
          </Text>
          <Text color="red500" fontSize="3xl" textTransform="uppercase">
            Text size: 3xl
          </Text>
          <Text color="red500" fontSize="4xl" textTransform="uppercase">
            Text size: 4xl
          </Text>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default TextComponent;
