---
title: Customization
date: "2019-08-13"
description: "Hello World"
---

You can provide a custom theme to customize the colors, font sizes, border radius etc. with the Provider component. Check the default theme to see which customization options are supported.

```jsx
import * as React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "react-native-magnus";
import App from "./src/App";

// this is our custom theme
const theme = {
  colors: {
    violet100: "#e1e1e1",
  },
  fontSize: {
    bigText100: 32,
  },
  spacing: {
    xs: 2
    xxxl: 64
  }
};

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
```

Checkout the demo on Snack - <a href="https://snack.expo.io/@pawankumar2901/magnus---theme-customizations" target="_blank">https://snack.expo.io/@pawankumar2901/magnus---theme-customizations</a>
