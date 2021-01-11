import React from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const TextComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="text" />

      <ScrollView>
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
          <Text color="gray800" fontSize="lg" fontWeight="bold">
            Text size: lg
          </Text>
        </ExampleSection>

        <ExampleSection name="uppercase + colored">
          <Text color="red500" fontSize="lg" textTransform="uppercase">
            Text size: lg
          </Text>
        </ExampleSection>

        <ExampleSection name="font family">
          <Text
            fontSize="4xl"
            textTransform="uppercase"
            fontFamily="OpenSans-Light"
          >
            Text size: 4xl
          </Text>

          <Text
            mt="xl"
            fontSize="2xl"
            fontWeight="bold"
            fontFamily="OpenSans-Light"
          >
            when fontweight is other than 'normal', fontfamily will be ignored
            (Android limitation). so we decided to this: when fontfamily is
            defined, fontweight will be set to 'normal' (on all platforms). set
            a default font for each fontweight on theme.
          </Text>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default TextComponent;
