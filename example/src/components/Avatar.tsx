import React from 'react';
import { ScrollView } from 'react-native';
import { Avatar, Div, Icon } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const AvatarComponent: React.FC = () => {
  return (
    <ExamplePage>
      <ExampleHeader name="avatar" />

      <ScrollView>
        <ExampleSection name="default">
          <Div flexDir="row">
            <Avatar bg="red300" color="red800" mr="md">
              A
            </Avatar>

            <Avatar bg="red300" size={32} color="red800" mr="md">
              A
            </Avatar>

            <Avatar bg="red300" size={28} color="red800" mr="md">
              A
            </Avatar>

            <Avatar bg="green800" mr="md">
              <Icon name="user" color="white" fontFamily="Feather" />
            </Avatar>

            <Avatar bg="green800" rounded="lg" mr="md">
              <Icon name="user" color="white" fontFamily="Feather" />
            </Avatar>

            <Avatar
              shadow={1}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
              }}
            />
          </Div>
        </ExampleSection>

        <ExampleSection name="group">
          <Avatar.Group>
            <Avatar bg="red500" color="textLight">
              A
            </Avatar>
            <Avatar bg="blue500" color="textLight">
              B
            </Avatar>
            <Avatar bg="yellow500" color="textLight">
              C
            </Avatar>
          </Avatar.Group>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default AvatarComponent;
