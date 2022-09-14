import React from 'react';
import { ScrollView } from 'react-native';
import { Toggle } from 'react-native-magnus';

import ExamplePage from '../utils/ExamplePage';
import ExampleHeader from '../utils/ExampleHeader';
import ExampleSection from '../utils/ExampleSection';

const ToggleComponent = () => {
  const [on, toggle] = React.useState(false);

  return (
    <ExamplePage>
      <ExampleHeader name="toggle" />

      <ScrollView>
        <ExampleSection name="default">
          <Toggle on={on} onPress={() => toggle(!on)} />
        </ExampleSection>

        <ExampleSection name="customized">
          <Toggle
            on={on}
            onPress={() => toggle(!on)}
            bg="white"
            circleBg="blue700"
            activeBg="blue700"
            activeCircleBg="white"
            h={30}
            w={60}
          />
        </ExampleSection>
      </ScrollView>
    </ExamplePage>
  );
};

export default ToggleComponent;
