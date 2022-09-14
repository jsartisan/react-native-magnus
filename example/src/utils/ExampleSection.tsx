import React, { ReactNode } from 'react';
import { Div, Text } from 'react-native-magnus';

interface ExampleSectionProps {
  name: string;
  withoutSpacingOnContent?: boolean;
  children: ReactNode;
}

const ExampleSection = ({
  name,
  withoutSpacingOnContent,
  children,
}: ExampleSectionProps) => {
  return (
    <Div my="md">
      <Text
        color="gray500"
        textTransform="uppercase"
        fontSize="lg"
        fontWeight="bold"
        mt="md"
        mb="sm"
        mx="xl"
      >
        {name}
      </Text>

      <Div mx={withoutSpacingOnContent ? 'none' : 'xl'}>{children}</Div>
    </Div>
  );
};

export default ExampleSection;
