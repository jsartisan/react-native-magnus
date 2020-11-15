---
title: Checkbox
date: "2019-08-13"
description: ""
---

Custom components for rendering checkbox input

<a href="https://snack.expo.io/@pawankumar2901/magnus---checkbox---example-1" target="_blank">See it on Snack</a>

<img src="/images/docs/checkbox/1.png"  style="height: 50px; width: auto;" />

```jsx
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Div, ThemeProvider, Checkbox } from "react-native-magnus";

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Div m="lg">
          <Div>
            <Div row>
              <Checkbox value={1} />
              <Checkbox value={2} defaultChecked />
              <Checkbox value={3} activeColor="green500" />
              <Checkbox value={4} disabled />
              <Checkbox value={5} loading />
            </Div>
          </Div>
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
```

<br />

## Example 1

Checkbox with prefix text

<img src="/images/docs/checkbox/2.png"  style="height: 120px; width: auto;" />

```jsx
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Div, ThemeProvider, Checkbox, Text } from "react-native-magnus";

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Div m="lg">
          <Div>
            <Div>
              <Checkbox value={1} prefix={<Text flex={1}>Option 1</Text>} />
              <Checkbox value={2} prefix={<Text flex={1}>Option 2</Text>} />
              <Checkbox value={3} prefix={<Text flex={1}>Option 3</Text>} />
            </Div>
          </Div>
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
```

<br />

## Example 2

Custom renderer

<img src="/images/docs/checkbox/3.png"  style="height: 80px; width: auto;" />

```jsx
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Div, ThemeProvider, Checkbox, Text } from "react-native-magnus";

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Div m="lg">
          <Checkbox.Group row>
            {["Option 1", "Option 2", "Option 3"].map((item) => (
              <Checkbox value={item}>
                {({ checked }) => (
                  <Div
                    bg={checked ? "blue600" : "blue100"}
                    px="xl"
                    py="md"
                    mr="md"
                    rounded="circle"
                  >
                    <Text color={checked ? "white" : "gray800"}>{item}</Text>
                  </Div>
                )}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
```

## Props

| Property          | Description                               | Type                                                      | Default      |
| ----------------- | ----------------------------------------- | --------------------------------------------------------- | ------------ |
| m                 | margin                                    | `string | number`                                         | -            |
| mt                | margin top                                | `string | number`                                         | -            |
| mr                | margin right                              | `string | number`                                         | -            |
| mb                | margin bottom                             | `string | number`                                         | -            |
| ml                | margin margin left                        | `string | number`                                         | -            |
| mx                | margin horizonal                          | `string | number`                                         | -            |
| my                | margin vertical                           | `string | number`                                         | -            |
| p                 | padding                                   | `string | number`                                         | -            |
| pt                | padding top                               | `string | number`                                         | -            |
| pr                | padding right                             | `string | number`                                         | -            |
| pb                | padding bottom                            | `string | number`                                         | -            |
| pl                | padding margin left                       | `string | number`                                         | -            |
| px                | padding horizonal                         | `string | number`                                         | -            |
| py                | padding vertical                          | `string | number`                                         | -            |
| rounded           | border radius                             | `string | number`                                         | `none`       |
| roundedTop        | border radius top                         | `string | number`                                         | `none`       |
| roundedBottom     | border radius bottom                      | `string | number`                                         | `none`       |
| roundedLeft       | border radius left                        | `string | number`                                         | `none`       |
| roundedRight      | border radius right                       | `string | number`                                         | `none`       |
| borderColor       | color for border                          | `string`                                                  | -            |
| borderTopColor    | color for border top                      | `string`                                                  | -            |
| borderRightColor  | color for border right                    | `string`                                                  | -            |
| borderLeftColor   | color for border left                     | `string`                                                  | -            |
| borderBottomColor | color for border bottom                   | `string`                                                  | -            |
| borderWidth       | width for border                          | `number`                                                  | -            |
| borderTopWidth    | width for border top                      | `number`                                                  | -            |
| borderRightWidth  | width for border right                    | `number`                                                  | -            |
| borderLeftWidth   | width for border left                     | `number`                                                  | -            |
| borderBottomWidth | width for border bottom                   | `number`                                                  | -            |
| onPress           | event triggered on pressing the checkbox  | `((event: RNGestureResponderEvent) => void) | undefined;` | `() => void` |
| checked           | state to control the state of checkbox    | `boolean`                                                 | `-`          |
| loading           | shows ActivityIndicator when true         | `boolean`                                                 | `false`      |
| disabled          | show disabled icon when true              | `boolean`                                                 | `false`      |
| size              | size for icon                             | `string`                                                  | `md`         |
| activeColor       | color for icon when checkbox is checked   | `string`                                                  | `blue600`    |
| inactiveColor     | color for icon when checkbox is unchecked | `string`                                                  | `gray400`    |
