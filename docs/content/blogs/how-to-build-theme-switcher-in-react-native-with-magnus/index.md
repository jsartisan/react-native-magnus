---
title: How to build Theme Switcher in React Native with Magnus
date: "2020-04-30"
description: "Giving your users an ability to change the theme has become a necessity nowadays. Every site is now providing a way to allow users to change the theme according to there mood."
featuredImg: "https://images.unsplash.com/photo-1503508343067-c4103b7140b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"
---

Giving your users an ability to change the theme has become a necessity nowadays. Every site is now providing a way to allow users to change the theme according to there mood.

In this guide, I will show you how to make Theme Switcher in your React Native app using [Magnus UI.](https://magnus-ui.com/)

# Installing

First, we will install the react-native-magnus library.

```bash
yarn add react-native-magnus
```

Magnus also uses many third-party libraries. So you will need to install them as well.

```bash
yarn add color react-native-animatable react-native-modal @expo/vector-icons
```

After you are done installing the packages, make sure you install pods.

```bash
cd ios && pods install
```

## Basic Setup

Wrap your root component in Provider from react-native-magnus.

```jsx
// App.js
import React from "react";
import { ThemeProvider } from "react-native-magnus";

const App = () => {
  return <ThemeProvider>// our app goes here</ThemeProvider>;
};

export default App;
```

ThemeProvider is basically using ContextAPI under the hood to provide the theme to all nested components.

## Adding theme

So our basic setup is out of the way, let's create the custom themes that we will in our app.

```jsx
// constants/themes.js

const THEMES = {
  light: {
    name: "light",
    colors: {
      body: "#fff",
      button: "#3087e8",
    },
  },
  dark: {
    name: "dark",
    colors: {
      body: "#000",
      button: "#e83045",
    },
  },
};

export default THEMES;
```

We need to make sure our ThemeProvider in index.js is using the light theme by default. That can be done by simply passing the theme prop to ThemeProvider.

```jsx
// App.js

import React from "react";
import THEMES from "./constants/themes";
import { ThemeProvider } from "react-native-magnus";

const App = () => {
  return (
    // highlight-start
    <ThemeProvider theme={THEMES.light}>
      // highlight-end
      <></>
    </ThemeProvider>
  );
};

export default App;
```

Ok, now it's time to build the Theme Switcher. Let's add a basic layout.

<div class="flex relative">
  <div class="flex-grow">

```jsx
// App.js

import React from "react";
import { ThemeProvider, Text, Div } from "react-native-magnus";

import THEMES from "./constants/themes";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
  return (
    <ThemeProvider theme={THEMES.light}>
      // highlight-start
      <Div bg="body" flex={1} px="lg">
        <Text mt="2xl" pt="xl" fontSize="5xl" color="text" fontWeight="bold">
          Settings
        </Text>
        <Div row mt="md">
          <Div flex={1}>
            <Text color="text">Night Mode</Text>
          </Div>
          <Div>
            <ThemeSwitcher />
          </Div>
        </Div>
      </Div>
      // highlight-end
    </ThemeProvider>
  );
};

export default App;
```

```jsx
// components/ThemeSwitcher.js

import React, { useContext } from "react";
import { Toggle, ThemeContext } from "react-native-magnus";

export default function ThemeSwitcher() {
  return <Toggle />;
}
```

</div>

  <div class="absolute top-0" style="right: -330px;">
    <img src="/images/blogs/how-to-build-theme-switcher-in-react-native-with-magnus/1.png" class="mobile" style="width: 320px;"  />
  </div>
</div>

**Div** and **Text** are components that are provided by Magnus. Notice how easily we are setting the background color of **Div** component by using bg prop. This is being done by Magnus internally. Magnus is transforming our theme values and applying them to these components 'style.

&#x200B;

Now we need to change our theme when the user presses the toggle button. As I previously said, **ThemeProvider** is basically using ContextAPI. Magnus also exposes the **ThemeContext** if we ever need to change the theme or need the current theme values.

<div class="flex relative">
  <div class="flex-grow">

```jsx
// components/ThemeSwitcher.js
import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { Toggle, ThemeContext } from "react-native-magnus";

import THEMES from "../constants/themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  /**
   * changes the theme on toggle press
   * if the theme is dark, set theme to light
   * else to dark
   */
  const onToggle = () => {
    if (theme.name === "dark") {
      setTheme(THEMES.light);
      StatusBar.setBarStyle("dark-content");
    } else {
      setTheme(THEMES.dark);
      StatusBar.setBarStyle("light-content");
    }
  };

  return <Toggle on={theme.name === "dark"} onPress={onToggle} />;
}
```

</div>

  <div class="absolute top-0" style="right: -330px;">
    <img src="/images/blogs/how-to-build-theme-switcher-in-react-native-with-magnus/2.gif" class="mobile" style="width: 320px;"  />
  </div>
</div>

## Explanation

1. We are grabbing the current and setTheme function from **ThemeContext** by using **useContext** hook.
2. When the user presses the **Toggle** button, we are checking the current theme name and changing the theme accordingly using the setTheme function we received from **ThemeContext**.
3. Notice how we are also changing StatusBar barStyle.

Feel free to check the full source code 💻on [GitHub](https://github.com/jsartisan/theme-switcher-magnus)
