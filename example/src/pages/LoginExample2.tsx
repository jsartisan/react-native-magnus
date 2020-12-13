import React from "react";
import { StatusBar } from "react-native";
import { Button, Div, Image, Input, Text } from "react-native-magnus";

const LOGO_URL = `https://freepngimg.com/thumb/logo/69823-instagram-icons-symbol-youtube-computer-logo-thumb.png`;

const LoginExample2: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Div px="2xl" bg="white" flex={1}>
        <Div justifyContent="center" flex={1}>
          <Image
            mt="xl"
            resizeMode="contain"
            w="100%"
            h={40}
            source={{ uri: LOGO_URL }}
          />
          <Text textAlign="center" fontSize="4xl" fontWeight="bold" mt="sm">
            Instagram
          </Text>
          <Div mt="md" pt="2xl">
            <Text fontSize="md" mb="sm">
              Email / Username
            </Text>
            <Input px="lg" rounded="sm" bg="gray200" borderWidth={0} />
          </Div>
          <Div mt="xl">
            <Text fontSize="md" mb="sm">
              Password
            </Text>
            <Input
              px="lg"
              bg="gray200"
              secureTextEntry
              rounded="sm"
              borderWidth={0}
            />
          </Div>
          <Div justifyContent="flex-end" flexDir="row">
            <Button
              mt="md"
              bg="transparent"
              color="gray800"
              fontSize="md"
              px={0}
            >
              Forgot Password
            </Button>
          </Div>
          <Button block bg="blue500" py="lg" mt="md">
            Login
          </Button>

          <Div
            justifyContent="center"
            alignItems="center"
            flexDir="row"
            mt="2xl"
          >
            <Text fontSize="md">Do you have an account?</Text>
            <Button
              bg="transparent"
              fontSize="md"
              color="blue500"
              fontWeight="bold"
            >
              Register here
            </Button>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default LoginExample2;
