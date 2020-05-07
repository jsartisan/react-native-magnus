---
title: Badge
date: "2019-08-13"
description: "Hello World"
---

Used to show status or some numerical value

<br />
<img src="/images/docs/badge/1.png" style="height: 100px; width: auto;"  />

```jsx
import { Badge } from 'react-native-magnus'

<Badge>
  <Avatar bg="red100" color="red700">
    A
  </Avatar>
</Badge>
<Badge ml="md">1</Badge>
<Badge ml="md" bg="red500">
  99+
</Badge>
<Badge bg="red500" right={-5} top={-5} h={10} w={10}>
  <Image
    ml="md"
    h={50}
    w={50}
    rounded="md"
    source={{
      uri: 'https://i.pravatar.cc/150?img=12',
    }}
  />
</Badge>
```

<br />

## Props

| Property          | Description                                                           | Type                     | Default    |
| ----------------- | --------------------------------------------------------------------- | ------------------------ | ---------- |
| m                 | margin                                                                | `string | number`        | -          |
| mt                | margin top                                                            | `string | number`        | -          |
| mr                | margin right                                                          | `string | number`        | -          |
| mb                | margin bottom                                                         | `string | number`        | -          |
| ml                | margin margin left                                                    | `string | number`        | -          |
| mx                | margin horizonal                                                      | `string | number`        | -          |
| my                | margin vertical                                                       | `string | number`        | -          |
| p                 | padding                                                               | `string | number`        | -          |
| pt                | padding top                                                           | `string | number`        | -          |
| pr                | padding right                                                         | `string | number`        | -          |
| pb                | padding bottom                                                        | `string | number`        | -          |
| pl                | padding margin left                                                   | `string | number`        | -          |
| px                | padding horizonal                                                     | `string | number`        | -          |
| py                | padding vertical                                                      | `string | number`        | -          |
| bg                | background color                                                      | `string`                 | `green700` |
| rounded           | border radius                                                         | `string | number`        | `circle`   |
| roundedTop        | border radius top                                                     | `string | number`        | `none`     |
| roundedBottom     | border radius bottom                                                  | `string | number`        | `none`     |
| roundedLeft       | border radius left                                                    | `string | number`        | `none`     |
| roundedRight      | border radius right                                                   | `string | number`        | `none`     |
| borderColor       | color for border                                                      | `string`                 | -          |
| borderTopColor    | color for border top                                                  | `string`                 | -          |
| borderRightColor  | color for border right                                                | `string`                 | -          |
| borderLeftColor   | color for border left                                                 | `string`                 | -          |
| borderBottomColor | color for border bottom                                               | `string`                 | -          |
| borderWidth       | width for border                                                      | `number`                 | -          |
| borderTopWidth    | width for border top                                                  | `number`                 | -          |
| borderRightWidth  | width for border right                                                | `number`                 | -          |
| borderLeftWidth   | width for border left                                                 | `number`                 | -          |
| borderRightWidth  | width for border right                                                | `number`                 | -          |
| position          | used to position the childrens                                        | `absolute" | "relative"` | `relative` |
| top               | number of logical pixels to offset the top edge of this component.    | `number`                 | `0`        |
| right             | number of logical pixels to offset the right edge of this component.  | `number`                 | `0`        |
| bottom            | number of logical pixels to offset the bottom edge of this component. | `number`                 | -          |
| left              | number of logical pixels to offset the left edge of this component.   | `number`                 | -          |
