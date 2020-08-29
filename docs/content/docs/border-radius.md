---
title: Border Radius
date: "2019-08-13"
description: ""
---

<br />

There are 6 values of border radius available in the default theme - that are `none`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl` and `circle`.

<img src="/images/docs/div/5.png"  style="height: 60px; width: auto;"   />

```jsx
<Div h={40} w={40} bg="green500"></Div>
<Div h={40} w={40} bg="green500" rounded="sm"></Div>
<Div h={40} w={40} bg="green500" rounded="md"></Div>
<Div h={40} w={40} bg="green500" rounded="lg"></Div>
<Div h={40} w={40} bg="green500" rounded="xl"></Div>
<Div h={40} w={40} bg="green500" rounded="2xl"></Div>
<Div h={40} w={40} bg="green500" rounded="circle"></Div>
```

| Size   | Value |
| ------ | ----- |
| none   | 0     |
| xs     | 2     |
| sm     | 4     |
| md     | 6     |
| lg     | 8     |
| xl     | 12    |
| 2xl    | 16    |
| circle | 10000 |

### Adding border radius

```jsx
import React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider, Text } from "react-native-magnus";
import App from "./src/App";

const theme = {
  borderRadius: {
    "3xl": 20,
  },
};

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Div h={40} w={40} bg="green500" rounded="3xl"></Div>
    </ThemeProvider>
  );
}
```
