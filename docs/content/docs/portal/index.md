---
title: Portal
date: "2019-08-13"
description: ""
---

Portal helps rendering a component outside where it is defined. Generally used for Snackbar, Modals, Drawers.

```jsx
import React from "react";
import { Div, Text, Host, Portal } from "react-native-magnus";

export const MyApp = () => (
  <Host>
    <Div>
      <Text>Some copy here and there...</Text>

      <Portal>
        <Text>A portal on top of the rest</Text>
      </Portal>
    </Div>
  </Host>
);
```

### Snackbar

Example with Snackbar

```jsx
import React from "react";
import { Modal, Host, Portal, Div, Icon, SnackbarRefType } from "react-native-magnus";

const snackbarLightRef = React.createRef<SnackbarRefType>();

export const App = () => (
  <Host>
    <Div>
     <Button
      onPress={() => {
        if (snackbarLightRef.current) {
          snackbarLightRef.current.show();
        }
      }}
    >
      Open snackbar
    </Button>

    <Portal>
      <Snackbar
        suffix={
          <Icon
            name="checkcircle"
            color="teal500"
            fontSize="subheader"
            fontFamily="AntDesign"
          />
        }
        onDismiss={() => {}}
        ref={snackbarLightRef}
        bg="green300"
        color="green800"
        duration={2000}
      >
        Here is a light snack for you!
      </Snackbar>
    </Portal>
    <Div>
  </Host>
);
```

This will render the snackbar outside the `Div` component because we wrapped it inside `Portal` component.
