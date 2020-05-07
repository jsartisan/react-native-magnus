---
title: Getting started
date: "2019-08-13"
description: "Hello World"
---

### Installation

Open a Terminal in your project's folder and run,

```bash
yarn add react-native-magnus
```

After installing the `react-native-magnus`, make sure you install peer dependencies.

```bash
yarn add color react-native-animatable react-native-modal @expo/vector-icons
```

Install pods

```bash
cd ios && pod install
```

### Usage

Wrap your root component in ThemeProvider from react-native-magnus.

```jsx
import * as React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider } from "react-native-magnus";

import App from "./src/App";

export default function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent("main", () => Main);
```

<br>
