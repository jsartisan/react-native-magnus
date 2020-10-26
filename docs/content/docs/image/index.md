---
title: Image
---

Wrapper around [Image](https://facebook.github.io/react-native/docs/image.html) of react-native

<a href="https://snack.expo.io/@pawankumar2901/magnus---image---example-1" target="_blank">See it on Snack</a>

<img src="/images/docs/image/1.png"  style="height: 150px; width: auto;" />

```jsx
import { Image } from "react-native-magnus";

<Image
  h={100}
  w={100}
  m={10}
  rounded="circle"
  source={{
    uri: "https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg",
  }}
/>;
```

<br/>

## Props

<br/>

All props of [Image](https://facebook.github.io/react-native/docs/image.html) of react-native are available for this component.

| Property          | Description             | Type              | Default |
| ----------------- | ----------------------- | ----------------- | ------- |
| m                 | margin                  | `string | number` | -       |
| mt                | margin top              | `string | number` | -       |
| mr                | margin right            | `string | number` | -       |
| mb                | margin bottom           | `string | number` | -       |
| ml                | margin margin left      | `string | number` | -       |
| mx                | margin horizonal        | `string | number` | -       |
| my                | margin vertical         | `string | number` | -       |
| p                 | padding                 | `string | number` | -       |
| pt                | padding top             | `string | number` | -       |
| pr                | padding right           | `string | number` | -       |
| pb                | padding bottom          | `string | number` | -       |
| pl                | padding margin left     | `string | number` | -       |
| px                | padding horizonal       | `string | number` | -       |
| py                | padding vertical        | `string | number` |         |
| h                 | height                  | `number`          | -       |
| w                 | width                   | `number`          | -       |
| minH              | minimum width           | `number`          | -       |
| minW              | minimum height          | `number`          | -       |
| rounded           | border radius           | `string | number` | `none`  |
| roundedTop        | border radius top       | `string | number` | `none`  |
| roundedBottom     | border radius bottom    | `string | number` | `none`  |
| roundedLeft       | border radius left      | `string | number` | `none`  |
| roundedRight      | border radius right     | `string | number` | `none`  |
| borderColor       | color for border        | `string`          | -       |
| borderTopColor    | color for border top    | `string`          | -       |
| borderRightColor  | color for border right  | `string`          | -       |
| borderLeftColor   | color for border left   | `string`          | -       |
| borderBottomColor | color for border bottom | `string`          | -       |
| borderWidth       | width for border        | `number`          | -       |
| borderTopWidth    | width for border top    | `number`          | -       |
| borderRightWidth  | width for border right  | `number`          | -       |
| borderLeftWidth   | width for border left   | `number`          | -       |
| borderRightWidth  | width for border right  | `number`          | -       |

| rounded | border radius | `any` | - |
