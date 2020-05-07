---
title: Tooltip
date: "2019-08-13"
description: "Hello World"
---

<img src="/images/docs/tooltip/1.gif"  style="height: 150px; width: auto;" />

```jsx
import { Tooltip, Button } from "react-native-magnus";

const tooltipRef = React.createRef();

<Tooltip ref={tooltipRef} text="Best tooltip ever!">
  <Button
    mt="sm"
    block
    onPress={() => {
      if (tooltipRef.current) {
        tooltipRef.current.show();
      }
    }}
  >
    Show Tooltip
  </Button>
</Tooltip>;
```

### Custom tooltip

You can also create custom tooltip content by passing a component instead of string in `text` prop.

<img src="/images/docs/tooltip/2.gif"  style="height: 150px; width: auto;" />

```jsx
import { Tooltip, Button } from "react-native-magnus";

const tooltipRef = React.createRef();

<Tooltip
  ref={tooltipRef}
  text={
    <Row bg="transparent" alignItems="center" justifyContent="center">
      <Icon name="heart" color="white" />
      <Text color="white" ml="md">
        Custom tooltip content
      </Text>
    </Row>
  }
  bg="red500"
>
  <Button
    mt="sm"
    block
    onPress={() => {
      if (tooltipRef.current) {
        tooltipRef.current.show();
      }
    }}
  >
    Show me tooltip
  </Button>
</Tooltip>;
```

## Props

| Property          | Description                                                                                | Type                                                                                      | Default  |
| ----------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | -------- |
| m                 | margin                                                                                     | `string | number`                                                                         | -        |
| mt                | margin top                                                                                 | `string | number`                                                                         | -        |
| mr                | margin right                                                                               | `string | number`                                                                         | -        |
| mb                | margin bottom                                                                              | `string | number`                                                                         | -        |
| ml                | margin margin left                                                                         | `string | number`                                                                         | -        |
| mx                | margin horizonal                                                                           | `string | number`                                                                         | -        |
| my                | margin vertical                                                                            | `string | number`                                                                         | -        |
| p                 | padding                                                                                    | `string | number`                                                                         | -        |
| pt                | padding top                                                                                | `string | number`                                                                         | -        |
| pr                | padding right                                                                              | `string | number`                                                                         | -        |
| pb                | padding bottom                                                                             | `string | number`                                                                         | -        |
| pl                | padding margin left                                                                        | `string | number`                                                                         | -        |
| px                | padding horizonal                                                                          | `string | number`                                                                         | -        |
| py                | padding vertical                                                                           | `string | number`                                                                         | -        |
| h                 | height                                                                                     | `number`                                                                                  | -        |
| w                 | width                                                                                      | `number`                                                                                  | -        |
| bg                | background color                                                                           | `string`                                                                                  | -        |
| minH              | mininmum height                                                                            | `number`                                                                                  | -        |
| minW              | minimum width                                                                              | `string`                                                                                  | -        |
| rounded           | border radius                                                                              | `string | number`                                                                         | `none`   |
| roundedTop        | border radius top                                                                          | `string | number`                                                                         | `none`   |
| roundedBottom     | border radius bottom                                                                       | `string | number`                                                                         | `none`   |
| roundedLeft       | border radius left                                                                         | `string | number`                                                                         | `none`   |
| roundedRight      | border radius right                                                                        | `string | number`                                                                         | `none`   |
| borderColor       | color for border                                                                           | `string`                                                                                  | -        |
| borderTopColor    | color for border top                                                                       | `string`                                                                                  | -        |
| borderRightColor  | color for border right                                                                     | `string`                                                                                  | -        |
| borderLeftColor   | color for border left                                                                      | `string`                                                                                  | -        |
| borderBottomColor | color for border bottom                                                                    | `string`                                                                                  | -        |
| borderWidth       | width for border                                                                           | `number`                                                                                  | -        |
| borderTopWidth    | width for border top                                                                       | `number`                                                                                  | -        |
| borderRightWidth  | width for border right                                                                     | `number`                                                                                  | -        |
| borderLeftWidth   | width for border left                                                                      | `number`                                                                                  | -        |
| borderRightWidth  | width for border right                                                                     | `number`                                                                                  | -        |
| flex              | flex property for container                                                                | `number`                                                                                  | -        |
| justifyContent    | describes how to align children within the main axis of their container                    | `"flex-start"| "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"` | -        |
| alignItems        | describes how to align children along the cross axis of their container                    | `"flex-start" | "flex-end" | "center" | "stretch" | "baseline";`                          | -        |
| flexDir           | controls the direction in which children of a node are laid out                            | `"row" | "column" | "row-reverse" | "column-reverse";`                                    | `column` |
| flexWrap          | controls what happens when children overflow the size of the container along the main axis | `"wrap" | "nowrap" | "wrap-reverse";`                                                     | `nowrap` |
| flexWrap          | controls what happens when children overflow the size of the container along the main axis | `"wrap" | "nowrap" | "wrap-reverse";`                                                     | `nowrap` |
| text              | content of tooltip                                                                         | `"string" | ReactNode`                                                                    | -        |
