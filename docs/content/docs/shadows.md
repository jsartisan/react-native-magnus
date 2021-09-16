---
title: Shadows
date: "2019-08-13"
description: ""
---

<br />

There are 6 values of shadows present in magnus's default theme - which are 1,2, 3, 4, 5 & 6.

<img src="/images/docs/div/4.png" style="max-width: 500px;" />

<a href="https://snack.expo.io/@pawankumar2901/magnus---shadows" target="_blank">See it on Snack</a>

```jsx
<Div shadow="xs" bg="white" h={40} w={40} rounded="md" />
<Div shadow="sm" bg="white" h={40} w={40} rounded="md" />
<Div shadow="md" bg="white" h={40} w={40} rounded="md" />
<Div shadow="lg" bg="white" h={40} w={40} rounded="md" />
<Div shadow="xl" bg="white" h={40} w={40} rounded="md" />
<Div shadow="2xl" bg="white" h={40} w={40} rounded="md" />
```

> Make sure you add a background color when using shadow, otherwise it won't work in some cases.

### Adding custom shadows

```jsx
import React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider, Text } from "react-native-magnus";
import App from "./src/App";

const theme = {
  shadow: {
    "3xl": {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.8,
      shadowRadius: 14,

      elevation: 25,
    },
  },
};

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Div h={40} w={40} rounded="md" shadow="3xl"></Div>
    </ThemeProvider>
  );
}
```
