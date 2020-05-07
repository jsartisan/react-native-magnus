const code = `<ThemeProvider theme={theme}>
  <SafeAreaView style={{ flex: 1 }}>
    <Div flex={1}>
      <Div px="xl" pt="xxl" flex={1} bg="pink100">
        <Image resizeMode="contain" w={100} h={40} justifyContent="flex-end" source={{ uri: logoUrl }} />
        <Text mt="sm" color="brown100" fontSize="text500" fontWeight="bold" w="60%">Discover the world’s top Designers & Creatives.</Text>
        <Image resizeMode="contain" flex={1} w="100%" source={{ uri: coverArtUrl }} />
        <Text pb="xl" mt="sm" color="brown100" fontSize="text300" w="60%">Art by Irina Valeeva</Text>
      </Div>
      <Div p="lg">
        <Button py="lg" bg="twitter"  block color="white" prefix={<Icon fontSize="text500"mr="md" name="twitter" color="white" />}>Sign-in with Twitter</Button>
        <Button mt="md" py="lg" bg="facebook"  block color="white" prefix={<Icon  fontSize="text500"mr="md" name="facebook-square" color="white" />}>Sign-in with Facebook</Button>
        <Button mt="md" py="lg" bg="google" justifyContent="center" alignItems="center" block color="white" prefix={<Icon fontSize="text500"mr="md" name="google" color="white" />}>Sign-in with Google</Button>
        <Div alignItems="center" justifyContent="center" flexDir="row" mt="xl">
          <Div h={1} flex={1} bg="gray200"></Div>
          <Text px="lg" fontSize="text300" color="gray500" textTransform="uppercase">Or With Email</Text>
          <Div></Div>
          <Div h={1} flex={1} bg="gray200"></Div>
        </Div>
          <Div alignItems="center" justifyContent="center" flexDir="row" mt="xl">
            <Button mr="sm" flex={1} py="lg" rounded="sm" bg="dribbble" color="white">Sign in</Button>
            <Button ml="sm" flex={1} py="lg" rounded="sm" bg="dribbble" color="white">Sign up</Button>
          </Div>
      </Div>
    </Div>
  </SafeAreaView>
</ThemeProvider>`;

export default code;
