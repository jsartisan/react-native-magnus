import * as React from "react";
import { useState } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

import {
  Text,
  Div,
  Tag,
  Fab,
  Icon,
  Radio,
  Input,
  Image,
  Avatar,
  Button,
  Skeleton,
  Checkbox,
  Tooltip,
  Snackbar,
  Dropdown,
  ThemeProvider,
  Host,
  Modal,
  ModalRef,
  Collapse,
  Portal,
  SnackbarRefType,
  ScrollDiv,
  DropdownRef,
  Drawer,
} from "react-native-magnus";

const fontSizes = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
];

const App = () => {
  const ref = React.createRef<DropdownRef>();

  return (
    <ThemeProvider>
      <Host>
        <Fab top={0} bg="red500" h={50} w={50}>
          <Button p="none" bg="transparent" justifyContent="flex-end">
            <Div rounded="sm" bg="white" p="sm">
              <Text fontSize="md">Cheer</Text>
            </Div>
            <Icon
              name="user"
              color="blue600"
              h={50}
              w={50}
              rounded="circle"
              ml="md"
              bg="white"
            />
          </Button>
        </Fab>
      </Host>
    </ThemeProvider>
  );
};

export default App;
