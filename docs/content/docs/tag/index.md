---
title: Tag
date: "2019-08-13"
description: ""
---

Custom components for rendering tags

<img src="/images/docs/tag/1.png"  style="height: 40px; width: auto;" />

```jsx
import { Tag, Icon } from 'react-native-magnus'

<Tag>Tag</Tag>
<Tag
  ml="sm"
  suffix={
    <Icon name="close" color="black700" fontSize="caption" />
  }
>
  Close
</Tag>
<Tag
  ml="sm"
  suffix={
    <Icon name="edit" color="black700" fontSize="caption" />
  }
>
  Edit
</Tag>
<Tag
  ml="sm"
  bg="yellow300"
  borderColor="yellow700"
  borderWidth={1}
>
  Custom Tag 1
</Tag>
<Tag
  ml="sm"
  bg="blue500"
  borderColor="blue700"
  borderWidth={1}
>
  Custom Tag 1
</Tag>
<Tag ml="sm" bg="blue700" color="white">
  Solid Tag
</Tag>
```

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
| p                 | padding                                                               | `any`                    | -          |
| h                 | height                                                                | `number`                 | -          |
| w                 | width                                                                 | `number`                 | -          |
| bg                | background color                                                      | `string`                 | -          |
| minH              | mininmum height                                                       | `number`                 | -          |
| minW              | minimum width                                                         | `string`                 | -          |
| rounded           | border radius                                                         | `string | number`        | `none`     |
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
| borderBottomWidth | width for border bottom                                               | `number`                 | -          |
| shadow            | describe the depth of shadow to be used                               | `number`                 | -          |
| shadowColor       | color for shadow                                                      | `string`                 | -          |
| position          | used to position the childrens                                        | `absolute" | "relative"` | `relative` |
| top               | number of logical pixels to offset the top edge of this component.    | `number`                 | -          |
| right             | number of logical pixels to offset the right edge of this component.  | `number`                 | -          |
| bottom            | number of logical pixels to offset the bottom edge of this component. | `number`                 | -          |
| left              | number of logical pixels to offset the left edge of this component.   | `number`                 | -          |
