---
title: Drawer
date: "2019-08-13"
description: ""
---

Custom component for rendering side drawer.

<br />
<img src="/images/docs/drawer/1.gif" class="mobile"  style="height: 600px; width: auto;" />

```jsx
import { Drawer } from 'react-native-magnus'

const drawerRef = React.createRef();

<Drawer ref={drawerRef} />

<Button
  onPress={() => {
    if (drawerRef.current) {
      drawerRef.current.open();
    }
  }}
>
  Open Drawer
</Button>
```

<br />

## Props

| Property          | Description                   | Type               | Default |
| ----------------- | ----------------------------- | ------------------ | ------- |
| m                 | margin                        | `string | number`  | -       |
| mt                | margin top                    | `string | number`  | -       |
| mr                | margin right                  | `string | number`  | -       |
| mb                | margin bottom                 | `string | number`  | -       |
| ml                | margin margin left            | `string | number`  | -       |
| mx                | margin horizonal              | `string | number`  | -       |
| my                | margin vertical               | `string | number`  | -       |
| p                 | padding                       | `string | number`  | -       |
| pt                | padding top                   | `string | number`  | -       |
| pr                | padding right                 | `string | number`  | -       |
| pb                | padding bottom                | `string | number`  | -       |
| pl                | padding margin left           | `string | number`  | -       |
| px                | padding horizonal             | `string | number`  | -       |
| py                | padding vertical              | `string | number`  | -       |
| bg                | background color              | `string`           | `white` |
| backdropColor     | backdrop color for drawer     | `string`           | `black` |
| drawerPercentage  | width of drawer in percentage | `number`           | `70`    |
| rounded           | border radius                 | `string | number`  | `none`  |
| roundedTop        | border radius top             | `string | number`  | `none`  |
| roundedBottom     | border radius bottom          | `string | number`  | `none`  |
| roundedLeft       | border radius left            | `string | number`  | `none`  |
| roundedRight      | border radius right           | `string | number`  | `none`  |
| borderColor       | color for border              | `string`           | -       |
| borderTopColor    | color for border top          | `string`           | -       |
| borderRightColor  | color for border right        | `string`           | -       |
| borderLeftColor   | color for border left         | `string`           | -       |
| borderBottomColor | color for border bottom       | `string`           | -       |
| borderWidth       | width for border              | `number`           | -       |
| borderTopWidth    | width for border top          | `number`           | -       |
| borderRightWidth  | width for border right        | `number`           | -       |
| borderLeftWidth   | width for border left         | `number`           | -       |
| borderRightWidth  | width for border right        |
| direction         | direction of drawer           | `"left' | "right"` | `left`  |
| animationTime     | animation time for drawer     | `number`           | `300`   |
