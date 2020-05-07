---
title: Spacing
date: "2019-08-13"
description: "Hello World"
---

Magnus provides consistent spacing for margins and padding so that you can build applications quickly. You can also easily directional

| Size | Value |
| ---- | ----- |
| none | 0     |
| xs   | 4     |
| sm   | 6     |
| md   | 8     |
| lg   | 12    |
| xl   | 24    |
| 2xl  | 32    |
| 3xl  | 64    |

<br>

### Examples

```jsx
// Padding ( p = padding in all directions )
<Div p="sm" />

// Padding Directional
// px = horizontal padding, py = vertical padding
<Div px="md" py="lg" />

// pt = padding top, pb = padding bottom
// pl = padding left pr = padding right
<Div pt="sm" pr="sm" pb="sm" pl="sm" />

// Margin ( ( m = margin in all directions ))
<Div m="sm" />

// Margin Directional
// mt = margin top, mb = margin bottom
// ml = margin left, mr = margin right
<Div mx="md" my="lg" />
<Div mt="sm" mr="sm" mb="sm" ml="sm" />
```

You can also pass values as number if you want to use any arbitary values. But we still recommended you to use pre-defined theme values to maintain consistency.

```jsx
<Div p={30} />
```

### Customizations

You can add custom spacing also.

```jsx
import React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider, Text } from 'react-native-magnus';
import App from './src/App';

const theme = {
  spacing: {
    xs: 2
    '4xl': 64
  }
}

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Div pt="xs" />
      <Div pt="4xl" />
    </ThemeProvider>
  );
}
```
