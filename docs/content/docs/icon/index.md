---
title: Icon
date: "2019-08-13"
description: ""
---

Used for rendering icons

<img src="/images/docs/icon/1.png"  style="height: 60px; width: auto;" />

```jsx
import { Icon } from 'react-native-magnus'

<Icon name="like1" color="blue700" fontSize="title" />
<Icon
  name="star"
  color="yellow700"
  fontSize="title"
  fontFamily="FontAwesome"
/>
<Icon name="codesquare" color="red500" fontSize="title" />
<Icon name="android1" color="teal500" fontSize="title" />
<Icon name="heart" color="red500" fontSize="title" />
<Icon name="apple1" color="blue700" fontSize="title" />
<Icon name="appstore1" color="teal500" fontSize="title" />
<Icon name="slack" color="yellow700" fontSize="title" />
```

We are using `react-native-vector-icons` behinds the scene.

> https://oblador.github.io/react-native-vector-icons/

### Example #1

<a href="https://snack.expo.io/@pawankumar2901/magnus---icon---example-1" target="_blank">See it on Snack</a>

<img src="/images/docs/icon/2.png"  style="height: 80px; width: auto;" />

</div>

```jsx
<Icon
  bg="yellow400"
  p={20}
  rounded="circle"
  name="star"
  color="yellow700"
  fontSize="xl"
  fontFamily="FontAwesome"
/>
```

<br />

## Props

| Property          | Description                                                           | Type                     | Default     |
| ----------------- | --------------------------------------------------------------------- | ------------------------ | ----------- |
| m                 | margin                                                                | `string | number`        | -           |
| mt                | margin top                                                            | `string | number`        | -           |
| mr                | margin right                                                          | `string | number`        | -           |
| mb                | margin bottom                                                         | `string | number`        | -           |
| ml                | margin margin left                                                    | `string | number`        | -           |
| mx                | margin horizonal                                                      | `string | number`        | -           |
| my                | margin vertical                                                       | `string | number`        | -           |
| p                 | padding                                                               | `string | number`        | -           |
| pt                | padding top                                                           | `string | number`        | -           |
| pr                | padding right                                                         | `string | number`        | -           |
| pb                | padding bottom                                                        | `string | number`        | -           |
| pl                | padding margin left                                                   | `string | number`        | -           |
| px                | padding horizonal                                                     | `string | number`        | -           |
| py                | padding vertical                                                      | `string | number`        | -           |
| h                 | height                                                                | `number`                 | -           |
| w                 | width                                                                 | `number`                 | -           |
| bg                | background color                                                      | `string`                 | -           |
| minH              | mininmum height                                                       | `number`                 | -           |
| minW              | minimum width                                                         | `string`                 | -           |
| rounded           | border radius                                                         | `string | number`        | `none`      |
| roundedTop        | border radius top                                                     | `string | number`        | `none`      |
| roundedBottom     | border radius bottom                                                  | `string | number`        | `none`      |
| roundedLeft       | border radius left                                                    | `string | number`        | `none`      |
| roundedRight      | border radius right                                                   | `string | number`        | `none`      |
| borderColor       | color for border                                                      | `string`                 | -           |
| borderTopColor    | color for border top                                                  | `string`                 | -           |
| borderRightColor  | color for border right                                                | `string`                 | -           |
| borderLeftColor   | color for border left                                                 | `string`                 | -           |
| borderBottomColor | color for border bottom                                               | `string`                 | -           |
| borderWidth       | width for border                                                      | `number`                 | -           |
| borderTopWidth    | width for border top                                                  | `number`                 | -           |
| borderRightWidth  | width for border right                                                | `number`                 | -           |
| borderLeftWidth   | width for border left                                                 | `number`                 | -           |
| borderRightWidth  | width for border right                                                | `number`                 | -           |
| flex              | flex property for container                                           | `number`                 | -           |
| shadow            | describe the depth of shadow to be used                               | `number`                 | -           |
| shadowColor       | color for shadow                                                      | `string`                 | -           |
| fontFamily        | name of the font family for icon                                      | `string`                 | `AntDesign` |
| fontSize          | fontSize for icon                                                     | `string`                 | `text400`   |
| name              | name of icon                                                          | `string`                 | `-`         |
| color             | icon color                                                            | `string`                 | `gray500`   |
| position          | used to position the childrens                                        | `absolute" | "relative"` | `relative`  |
| top               | number of logical pixels to offset the top edge of this component.    | `number`                 | -           |
| right             | number of logical pixels to offset the right edge of this component.  | `number`                 | -           |
| bottom            | number of logical pixels to offset the bottom edge of this component. | `number`                 | -           |
| left              | number of logical pixels to offset the left edge of this component.   | `number`                 | -           |
| opacity           | opacity                                                               | `number`                 | -           |
