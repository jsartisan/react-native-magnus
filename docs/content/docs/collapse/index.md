---
title: Collapse
date: "2019-08-13"
description: ""
---

Custom component for rendering collapse panel.

<br />
<img src="/images/docs/collapse/1.gif" class="mobile"  style="height: 600px; width: auto;" />

```jsx
import { Collapse } from "react-native-magnus";

<Collapse>
  <Collapse.Header
    active
    color="gray900"
    fontSize="md"
    p="xl"
    px="none"
    prefix={<Icon name="wallet" mr="md" color="gray400" />}
  >
    Header 1
  </Collapse.Header>
  <Collapse.Body pb="xl">
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nobis
      corporis ut, ex sed aperiam. Debitis, facere! Animi quis laudantium, odio
      nulla recusandae labore pariatur in, vitae corporis delectus repellendus.
    </Text>
  </Collapse.Body>
</Collapse>;
```

<br />

## Props

### Collapse

Collapse is basically a `Div` component. So it accepts all props of `Div` with the following extra props

| Property      | Description                                       | Type      | Default |
| ------------- | ------------------------------------------------- | --------- | ------- |
| defaultActive | shows the collapse as opened when true by default | `boolean` | `false` |

### Collapse.Header

Collapse.Header is basically a `Button` component. So it accepts all props of `Button` with the following extra props

| Property     | Description                                            | Type        | Default |
| ------------ | ------------------------------------------------------ | ----------- | ------- |
| activeSuffix | Renders a component on the right of button when active | `ReactNode` | `-`     |
| activePrefix | Renders a component on the left of button when active  | `ReactNode` | `-`     |

### Collapse.Body

CollapseHeader is basically a `Div` component. So it accepts all props of `Div`
