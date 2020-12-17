import React from "react";
import { Div, Text } from "react-native-magnus";

const ExampleSection: React.FC<{
  name: string;
  withoutSpacingOnContent?: boolean;
}> = ({ name, withoutSpacingOnContent, children }) => {
  return (
    <Div my="md">
      <Text
        color="gray600"
        textTransform="uppercase"
        fontSize="lg"
        fontWeight="bold"
        mt="md"
        mb="sm"
        mx="xl"
      >
        {name}
      </Text>

      <Div mx={withoutSpacingOnContent ? "none" : "xl"}>{children}</Div>
    </Div>
  );
};

export default ExampleSection;
