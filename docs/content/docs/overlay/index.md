---
title: Overlay
date: '2019-08-13'
description: ''
---

<br />

<img src="/images/docs/overlay/1.gif" class="mobile" style="height: 550px; width: auto;" />

<br />

```jsx
import { ActivityIndicator } from 'react-native'
import { Button, Overlay, Text } from 'react-native-magnus'

const [overlayVisible, setOverlayVisible] = useState(false);

<Button
  onPress={() => {
    setOverlayVisible(true);

    setTimeout(() => {
      setOverlayVisible(false);
    }, 2000);
  }}
  block>
  Show Overlay
</Button>

<Overlay visible={overlayVisible} p="xl">
  <ActivityIndicator />
  <Text mt="md">Loading...</Text>
</Overlay>
```

## Props

| Property      | Description          | Type     | Default |
| ------------- | -------------------- | -------- | ------- | ------ |
| m             | margin               | `string  | number` | -      |
| mt            | margin top           | `string  | number` | -      |
| mr            | margin right         | `string  | number` | -      |
| mb            | margin bottom        | `string  | number` | -      |
| ml            | margin margin left   | `string  | number` | -      |
| mx            | margin horizonal     | `string  | number` | -      |
| my            | margin vertical      | `string  | number` | -      |
| p             | padding              | `string  | number` | -      |
| pt            | padding top          | `string  | number` | -      |
| pr            | padding right        | `string  | number` | -      |
| pb            | padding bottom       | `string  | number` | -      |
| pl            | padding margin left  | `string  | number` | -      |
| px            | padding horizonal    | `string  | number` | -      |
| py            | padding vertical     | `string  | number` | -      |
| h             | height of modal      | `number` | `100%`  |
| bg            | background of modal  | `string` | `white` |
| rounded       | border radius        | `string  | number` | `none` |
| roundedTop    | border radius top    | `string  | number` | `none` |
| roundedBottom | border radius bottom | `string  | number` | `none` |
| roundedLeft   | border radius left   | `string  | number` | `none` |
| roundedRight  | border radius right  | `string  | number` | `none` |

Apart from these props, The `<Overlay />` also accepts all props available in [React Native Modal component](https://reactnative.dev/docs/modal).
