import React from "react";
import { Div, Text } from "react-native-magnus";

const ExampleSection: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <Div mx="xl" my="md">
      <Text
        color="gray700"
        textTransform="uppercase"
        fontSize="lg"
        mt="md"
        mb="sm"
      >
        {name}
      </Text>

      {children}
    </Div>
  );
};

export default ExampleSection;
