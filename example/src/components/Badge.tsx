import React from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Badge, Div, Image } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const BadgeComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="badge" />

      <ScrollView>
        <ExampleSection name="default">
          <Div flexDir="row">
            <Badge>
              <Avatar bg="red100" color="red700">
                A
              </Avatar>
            </Badge>
            <Badge ml="md">1</Badge>
            <Badge ml="md" bg="red500">
              99+
            </Badge>
            <Badge bg="red500" right={-5} top={-5} h={10} w={10}>
              <Image
                ml="md"
                h={50}
                w={50}
                rounded="md"
                source={{
                  uri: 'https://i.pravatar.cc/150?img=12',
                }}
              />
            </Badge>
          </Div>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default BadgeComponent;
