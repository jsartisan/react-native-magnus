---
title: Typography
date: "2019-08-13"
description: ""
---

The default theme of magnus consists of following font sizes:

<img src="/images/docs/typography/1.png"  style="height: 350px; width: auto;" />

| Size | Value |
| ---- | ----- |
| xs   | 11    |
| sm   | 12    |
| md   | 13    |
| lg   | 15    |
| xl   | 17    |
| 2xl  | 19    |
| 3xl  | 21    |
| 4xl  | 24    |
| 5xl  | 27    |
| 6xl  | 32    |

<br>

### Usage

```jsx
import { Text } from "react-native-magnus";

<Text fontSize="6xl">Text 6xl</Text>;
```

<br>

### Adding custom font sizes

You can add custom or customize the existing font sizes with the ThemeProvider component.

```jsx
import React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider, Text } from "react-native-magnus";
import App from "./src/App";

// here we are adding our custom font sizes and
// customizing xs
const theme = {
  fontSize: {
    xs: 10,
    "7xl": 64,
  },
};

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Text fontSize="7xl">Text 7xl</Text>
    </ThemeProvider>
  );
}
```
