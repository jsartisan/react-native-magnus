import React from "react";
import { StatusBar } from "react-native";
import {
  Div,
  Text,
  Button,
  Icon,
  Image,
  ThemeContext,
} from "react-native-magnus";

const logoUrl =
  "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/b679564184bacafa9ab962c3de08ea4c";
const coverArtUrl =
  "https://snack-code-uploads.s3-us-west-1.amazonaws.com/~asset/48291e77266322ccd84e4838c8fc72ad";

const LoginExample1: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={themeContext.theme.colors.loginExample1Bg}
      />
      <Div flex={1}>
        <Div px="xl" pt="2xl" flex={1} bg="loginExample1Bg">
          <Image
            resizeMode="contain"
            w={100}
            h={40}
            source={{ uri: logoUrl }}
          />
          <Text
            mt="sm"
            color="brown100"
            fontSize="xl"
            fontWeight="bold"
            w="60%"
          >
            Discover the world’s top Designers & Creatives.
          </Text>
          <Image
            resizeMode="contain"
            flex={1}
            w="100%"
            mx="auto"
            source={{ uri: coverArtUrl }}
          />
          <Text pb="xl" mt="sm" color="brown100" fontSize="lg" w="60%">
            Art by Irina Valeeva
          </Text>
        </Div>
        <Div p="lg">
          <Button
            py="lg"
            rounded="sm"
            bg="twitter"
            block
            color="white"
            prefix={<Icon fontSize="xl" mr="md" name="twitter" color="white" />}
          >
            Sign-in with Twitter
          </Button>
          <Button
            mt="md"
            py="lg"
            rounded="sm"
            bg="facebook"
            block
            color="white"
            prefix={
              <Icon
                fontSize="xl"
                mr="md"
                name="facebook-square"
                color="white"
              />
            }
          >
            Sign-in with Facebook
          </Button>
          <Button
            mt="md"
            py="lg"
            rounded="sm"
            bg="google"
            justifyContent="center"
            alignItems="center"
            block
            color="white"
            prefix={<Icon fontSize="xl" mr="md" name="google" color="white" />}
          >
            Sign-in with Google
          </Button>
          <Div
            alignItems="center"
            justifyContent="center"
            flexDir="row"
            mt="xl"
          >
            <Div h={1} flex={1} bg="gray200"></Div>
            <Text
              px="lg"
              fontSize="lg"
              color="gray500"
              textTransform="uppercase"
            >
              Or With Email
            </Text>
            <Div></Div>
            <Div h={1} flex={1} bg="gray200"></Div>
          </Div>
          <Div
            alignItems="center"
            justifyContent="center"
            flexDir="row"
            mt="xl"
          >
            <Button
              mr="sm"
              flex={1}
              py="lg"
              rounded="sm"
              bg="dribbble"
              color="white"
            >
              Sign in
            </Button>
            <Button
              ml="sm"
              flex={1}
              py="lg"
              rounded="sm"
              bg="dribbble"
              color="white"
            >
              Sign up
            </Button>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default LoginExample1;
