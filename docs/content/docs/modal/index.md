---
title: Modal
date: "2019-08-13"
description: ""
---

Wrapper around `<Modal />` of [react-native-modal](https://github.com/react-native-community/react-native-modal). It accepts all the props `react-native-modal` offers.

<br />

<img src="/images/docs/modal/1.gif" class="rounded-lg" style="height: 550px; width: auto;" />

<br />

```jsx
import { Button, Modal, Icon } from 'react-native-magnus'

const modalRef = React.createRef();

<Button
  onPress={() => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  }}
>
  Open Modal
</Button>

<Modal ref={modalRef}>
  <Button
    bg="gray400"
    h={35}
    w={35}
    position="absolute"
    top={50}
    right={15}
    rounded="circle"
    onPress={() => {
      if (modalRef.current) {
        modalRef.current.close();
      }
    }}
  >
    <Icon color="black900" name="close" />
  </Button>
</Modal>
```

## Props

| Property | Description         | Type     | Default |
| -------- | ------------------- | -------- | ------- |
| h        | height of modal     | `number` | `100%`  |
| bg       | background of modal | `string` | `white` |

Apart from these props, The `<Modal />` also accepts all props available in [react-native-modal](https://github.com/react-native-community/react-native-modal).
