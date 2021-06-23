import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { Collapse, Icon, Text } from 'react-native-magnus';
import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const CollapseComponent: FC = () => (
  <ExamplePage>
    <ExampleHeader name="collapse" />

    <ScrollView>
      <ExampleSection name="default">
        <Collapse>
          <Collapse.Header>Header 1</Collapse.Header>
          <Collapse.Body>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nobis corporis ut, ex sed aperiam. Debitis, facere! Animi quis
              laudantium, odio nulla recusandae labore pariatur in, vitae
              corporis delectus repellendus.
            </Text>
          </Collapse.Body>
        </Collapse>

        <Collapse>
          <Collapse.Header>Header 2</Collapse.Header>
          <Collapse.Body>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nobis corporis ut, ex sed aperiam. Debitis, facere! Animi quis
              laudantium, odio nulla recusandae labore pariatur in, vitae
              corporis delectus repellendus.
            </Text>
          </Collapse.Body>
        </Collapse>
      </ExampleSection>

      <ExampleSection name="only 1 open at time">
        <Collapse.Group defaultActive={2}>
          <Collapse id={1}>
            <Collapse.Header>Header 1</Collapse.Header>
            <Collapse.Body>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                nobis corporis ut, ex sed aperiam. Debitis, facere! Animi quis
                laudantium, odio nulla recusandae labore pariatur in, vitae
                corporis delectus repellendus.
              </Text>
            </Collapse.Body>
          </Collapse>

          <Collapse id={2}>
            <Collapse.Header>Header 2</Collapse.Header>
            <Collapse.Body>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                nobis corporis ut, ex sed aperiam. Debitis, facere! Animi quis
                laudantium, odio nulla recusandae labore pariatur in, vitae
                corporis delectus repellendus.
              </Text>
            </Collapse.Body>
          </Collapse>
        </Collapse.Group>
      </ExampleSection>

      <ExampleSection name="active suffix">
        <Collapse>
          <Collapse.Header
            suffix={
              <Icon
                px="xl"
                fontSize="xl"
                name="ios-add"
                fontFamily="Ionicons"
                position="absolute"
                right={0}
                color="white"
              />
            }
            activeSuffix={
              <Icon
                px="xl"
                fontSize="xl"
                name="ios-remove"
                fontFamily="Ionicons"
                position="absolute"
                right={0}
                color="white"
              />
            }
          >
            Header 1
          </Collapse.Header>
          <Collapse.Body>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nobis corporis ut, ex sed aperiam. Debitis, facere! Animi quis
              laudantium, odio nulla recusandae labore pariatur in, vitae
              corporis delectus repellendus.
            </Text>
          </Collapse.Body>
        </Collapse>
      </ExampleSection>
    </ScrollView>
  </ExamplePage>
);

export default CollapseComponent;
