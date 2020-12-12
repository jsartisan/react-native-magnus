import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Div, Header, Icon, Text } from "react-native-magnus";

const ExampleHeader: React.FC<{ name: string }> = ({ name }) => {
  const navigation = useNavigation();

  return (
    <Header
      py="lg"
      px="xl"
      prefix={
        <Button
          rounded="circle"
          mr="lg"
          bg="white"
          justifyContent="center"
          alignItems="center"
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrowleft" color="black" fontSize="4xl" />
        </Button>
      }
    >
      <Div>
        <Text textTransform="capitalize" fontWeight="bold" fontSize="2xl">
          {name}
        </Text>
        <Text color="gray700">Examples</Text>
      </Div>
    </Header>
  );
};

export default ExampleHeader;
