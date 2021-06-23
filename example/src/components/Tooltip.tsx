import React, { FC, useRef } from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  Div,
  Icon,
  Text,
  Tooltip,
  TooltipRef,
} from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const TooltipComponent: FC = () => {
  const tooltipRef1 = useRef<TooltipRef>(null);
  const tooltipRef2 = useRef<TooltipRef>(null);

  return (
    <ExamplePage>
      <ExampleHeader name="tooltip" />

      <ScrollView>
        <ExampleSection name="default">
          <Tooltip ref={tooltipRef1} text="Best tooltip ever!">
            <Button mt="sm" block onPress={() => tooltipRef1.current?.show()}>
              Show Tooltip
            </Button>
          </Tooltip>
        </ExampleSection>

        <ExampleSection name="custom">
          <Tooltip
            ref={tooltipRef2}
            text={
              <Div
                bg="transparent"
                alignItems="center"
                justifyContent="center"
                flexDir="row"
                px="lg"
                py="sm"
              >
                <Icon name="heart" color="white" />
                <Text color="white" ml="md">
                  Custom tooltip content
                </Text>
              </Div>
            }
            bg="red500"
          >
            <Button mt="sm" block onPress={() => tooltipRef2.current?.show()}>
              Show me tooltip
            </Button>
          </Tooltip>
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default TooltipComponent;
