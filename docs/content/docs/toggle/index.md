---
title: Toggle
date: "2019-08-13"
description: "Hello World"
---

Custom toggle component

<img src="/images/docs/toggle/1.gif"  style="height: 50px; width: auto;" />

```jsx
import { Toggle, Icon } from "react-native-magnus";

const [on, toggle] = useState(false);

<Toggle
  on={on}
  onPress={() => toggle(!on)}
  bg="gray200"
  circleBg="blue500"
  activeBg="blue700"
  h={30}
  w={60}
/>;
```

<br />

## Props

| Property          | Description                                  | Type              | Default |
| ----------------- | -------------------------------------------- | ----------------- | ------- |
| m                 | margin                                       | `string | number` | -       |
| mt                | margin top                                   | `string | number` | -       |
| mr                | margin right                                 | `string | number` | -       |
| mb                | margin bottom                                | `string | number` | -       |
| ml                | margin margin left                           | `string | number` | -       |
| mx                | margin horizonal                             | `string | number` | -       |
| my                | margin vertical                              | `string | number` | -       |
| p                 | padding                                      | `string | number` | -       |
| pt                | padding top                                  | `string | number` | -       |
| pr                | padding right                                | `string | number` | -       |
| pb                | padding bottom                               | `string | number` | -       |
| pl                | padding margin left                          | `string | number` | -       |
| px                | padding horizonal                            | `string | number` | -       |
| py                | padding vertical                             | `string | number` | -       |
| h                 | height                                       | `number`          | -       |
| w                 | width                                        | `number`          | -       |
| bg                | background color                             | `string`          | -       |
| circleBg          | background color of circle                   | `string`          | -       |
| activeCircleBg    | background color of circle when toggle is on | `string`          | -       |
| disabled          | disables onPress handler when true           | `boolean`         | -       |
| onPress           | onPress event handler                        | `() => void`      | -       |
| on                | makes the toggle active when true            | `boolean`         | `false` |
| rounded           | border radius                                | `string | number` | `none`  |
| roundedTop        | border radius top                            | `string | number` | `none`  |
| roundedBottom     | border radius bottom                         | `string | number` | `none`  |
| roundedLeft       | border radius left                           | `string | number` | `none`  |
| roundedRight      | border radius right                          | `string | number` | `none`  |
| borderColor       | color for border                             | `string`          | -       |
| borderTopColor    | color for border top                         | `string`          | -       |
| borderRightColor  | color for border right                       | `string`          | -       |
| borderLeftColor   | color for border left                        | `string`          | -       |
| borderBottomColor | color for border bottom                      | `string`          | -       |
| borderWidth       | width for border                             | `number`          | -       |
| borderTopWidth    | width for border top                         | `number`          | -       |
| borderRightWidth  | width for border right                       | `number`          | -       |
| borderLeftWidth   | width for border left                        | `number`          | -       |
| borderRightWidth  | width for border right                       | `number`          | -       |
