import React from 'react';
import { ScrollView } from 'react-native';
import { Div, Skeleton } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const SkeletonComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="skeleton" />

      <ScrollView>
        <ExampleSection name="default">
          <Div m="md">
            <Div flexDir="row">
              <Skeleton.Circle h={40} w={40} />
              <Div ml="md" flex={1}>
                <Skeleton.Box mt="sm" />
                <Skeleton.Box mt="sm" w="80%" />
                <Skeleton.Box mt="sm" />
              </Div>
            </Div>
            <Div flexDir="row" mt="md">
              <Skeleton.Circle h={20} w={20} rounded="lg" />
              <Skeleton.Circle h={20} w={20} rounded="lg" ml="md" />
              <Div alignItems="flex-end" flex={1}>
                <Skeleton.Box h={20} w={100} />
              </Div>
            </Div>
          </Div>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default SkeletonComponent;
