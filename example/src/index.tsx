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
  Header,
  Toggle,
  Select,
  Animated,
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
  const [on, toggle] = useState(false);
  const [selectValue, setSelectedValue] = useState([]);
  const selectRef = React.createRef();

  const onSelectOption = (values) => setSelectedValue(values);

  return (
    <ThemeProvider>
      <Host>
        <ThemeProvider>
          <SafeAreaView style={{ flex: 1 }} />
        </ThemeProvider>
      </Host>
    </ThemeProvider>
  );
};

export default App;
