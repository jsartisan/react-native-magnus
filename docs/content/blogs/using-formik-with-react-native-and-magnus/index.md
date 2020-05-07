---
title: Handling forms with Formik, Yup and Magnus in React Native
date: "2020-04-09"
description: "Forms play a very crucial role in any app. They are the portal through which the user submits data. So building scalable forms becomes a very important task..."
featuredImg: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
---

Forms play a very crucial role in any app. They are the portal through which the user submits data. So building scalable forms becomes a very important task.

Every form has three main aspects that need to be addressed:

1. Values
2. Validation
3. Form Submission

Handling these aspects all by yourself can be a little tedious and overwhelming. So using a third-party package would be a wise decision.
Now there are two main packages that people recommend for form - Redux Forms and Formik.
We will be using Formik as saving form states in redux seems overkill.

<br />
Let's start.

## Setup

We will be using Magnus for making inputs and yup for creating validation schemas.

```bash
yarn add color react-native-animatable react-native-modal @expo/vector-icons formik yup
```

Make sure you install pods after installing these dependencies.

```jsx
import * as React from "react";
import { AppRegistry } from "react-native";
import { ThemeProvider, Text } from "react-native-magnus";

const theme = {
  fontSize: {
    bigText100: 40,
  },
};

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Text>Hello World</Text>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent("main", () => Main);
```

Let's first create the inputs using Magnus

<div class="flex relative">
  <div class="flex-grow">

```jsx{numberLines: true}
import * as React from "react";
import { AppRegistry, SafeAreaView } from "react-native";
// highlight-start
import { ThemeProvider, Text, Button, Input } from "react-native-magnus";
// highlight-end

export default function Main() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Div m="lg">
          <Text
            mt="xxl"
            color="black900"
            fontWeight="bold"
            fontSize="bigText100"
          >
            Login
          </Text>
          <Text color="gray500" mt="sm">
            Lorem ipsum dolor sit, amet consectetur.
          </Text>
          <Text fontSize="text300" color="gray600" mt="xxl">
            Email
          </Text>
          <Input
            mt="sm"
            py="lg"
            placeholder="Email Address"
            autoCapitalize={false}
          />

          <Text fontSize="text300" color="gray600" mt="xl">
            Password
          </Text>

          <Input mt="sm" py="lg" placeholder="Password" secureTextEntry />

          <Button block py="lg" mt="xl">
            Submit
          </Button>
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
}
```

</div>

  <div class="absolute top-0" style="right: -330px;">
    <img src="/images/blogs/using-formik-with-react-native-and-magnus/1.png" class="mobile" style="width: 320px;"  />
  </div>
</div>

## Explanation

1. Line no 9 - `<Div m="lg">`

`Div` is a wrapper around `View` provided by Magnus. Since it's a wrapper around `View` of react-native, it accepts all props that are supported by View. Being a Magnus component, it has all the utility magic ( spacing, border-radius, colors, etc). Here we are proving margin on all sides with value `lg` which is evaluated to 12.

> You can see more about this spacing utilities here - https://magnus-ui.com/docs/spacing

2. Line no 10 - **[Text](https://magnus-ui.com/docs/text/)** here is a wrapper around [Text](https://reactnative.dev/docs/text) of **react-native**.

3. Line no 23 - Similarly, **[Input](https://magnus-ui.com/docs/input/)** here is a wrapper around **[TextInput](https://reactnative.dev/docs/textinput.html)** of **react-native**.

4. Line no 36 - Similarly, **[Button](https://magnus-ui.com/docs/button/)** here is provided by Magnus. It's a wrapper around TouchableHighlight and TouchableNativeFeedback of react-native. For iOS, Button uses TouchableHighlight and for android, it renders out TouchableNativeFeedback.

## Adding Formik

```jsx{numberLines: true}
import * as React from "react";
// highlight-start
import { Formik } from "formik";
// highlight-end
import { AppRegistry, SafeAreaView } from "react-native";
import { ThemeProvider, Text, Button, Input } from "react-native-magnus";

export default function Main() {
  return (
    <ThemeProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Div m="lg">
          // highlight-start
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={() => {}}
          >
            // highlight-end
            {(props) => {
              return <>...</>;
            }}
            // highlight-start
          </Formik>
          // highlight-end
        </Div>
      </SafeAreaView>
    </ThemeProvider>
  );
}
```

## Explanation

1. Line no 11 - Here we are wrapping our form around **Formik**.
2. Line no 12 - This is how we initialize values of inputs of the form. We have two inputs in our form. So, we created two initial values and set them to empty values. You can set anything you want here.
3. Line no 16 - onSubmit is a prop which tells Formik what to do when the form is submitted.

## Updating inputs

Now let's integrate our input and submit button with Formik.

```jsx{numberLines: true}

...
<SafeAreaView style={{ flex: 1 }}>
  <Div m="lg">
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={this.onSubmit}
      validationSchema={loginValidator}
    >
      {props => {
        // highlight-start
        const {
          values,
          status,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        // highlight-end

        return (
          <>
            <Text
              mt="xxl"
              color="black900"
              fontWeight="bold"
              fontSize="bigText100"
            >
              Login
            </Text>
            <Text color="gray500" mt="sm">
              Lorem ipsum dolor sit, amet consectetur.
            </Text>
            <Text fontSize="text300" color="gray600" mt="xxl">
              Email
            </Text>
            <Input
              mt="sm"
              py="lg"
              placeholder="Email Address"
              autoCapitalize={false}
              value={values.email}
              // highlight-start
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              // highlight-end
            />

            <Text fontSize="text300" color="gray600" mt="xl">
              Password
            </Text>

            <Input
              mt="sm"
              py="lg"
              placeholder="Password"
              secureTextEntry
              value={values.password}
              // highlight-start
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              // highlight-end

            />

            <Button
              block
              py="lg"
              mt="xl"
              // highlight-start
              onPress={handleSubmit}
              loading={isSubmitting}
              // highlight-end
            >
              Submit
            </Button>
          </>
        );
      }}
    </Formik>
  </Div>
</SafeAreaView>
```

## Explanation

1. Line no 13 - We are deconstructing props provided by Formik.
2. Line no 46 - Here we are using the handler function provided by Formik. It updates the values in Formik state.
3. Line no 68 - Here we are telling the button to submit the form when it is pressed.

## API

On line 13, We deconstructed some props provided by Formik. Here is what those props are meant for:

- **values** : Object containing values of the form fields.
- **errors** : Object containing error messages of the fields.
- **touched** : An object containing fields that have been touched/visited, fields that have been touched are set to true otherwise they are set to false.
- **handleChange** : handler function that updates the state of inputs.
- **isValid** : Returns true if there are no errors.
- **isSubmitting** : Returns true is form is submitting

There are many more props provided by formik that you can read about more here - https://jaredpalmer.com/formik/docs/api/formik

## Validation with Yup

Now we have our form and inputs rendered, Let’s start with the form validation. This is where Yup is needed. We chose yup for two reason

1. It provides intuitively APIS to create validation schema
2. It integrates very well with Formik

Import it at the top.

```jsx
import * as React from "react";
import { Formik } from "formik";
import { AppRegistry, SafeAreaView } from "react-native";
import { ThemeProvider, Text, Button, Input } from "react-native-magnus";
// highlight-start
import * as Yup from "yup";
// highlight-end
```

Now let's create our validation schema for our login form.

```js
export const loginValidator = yup.object().shape({
  email: yup.string().min(1).required().email(),
  password: yup.string().min(6).required().max(255),
});
```

Formik accepts a special prop called `validationSchema` to which we can pass yup schema object and Formik will handle validation for us.

```jsx
// ...
 <Formik
  initialValues={{
    email: '',
    password: '',
  }}
  onSubmit={() => {}}
  // highlight-start
  validationSchema={loginValidator}>
  // highlight-end
```

That's it. Yup is integrated with Formik now.

### Adding fields error messages

Since we have our Formik form integrated with yup schema, we can easily render out field error messages.
All of our field errors are stored in **errors** object.

<div class="flex relative">
  <div class="flex-grow">

```jsx
...
  <Input
    mt="sm"
    py="lg"
    placeholder="Email Address"
    autoCapitalize={false}
    value={values.email}
    onChangeText={handleChange('email')}
    onBlur={handleBlur('email')}
  />

  // highlight-start
    <Div h={20}>
      <Div position="absolute" top={0} zIndex={1}>
        <Text color="red500" fontSize="text300" mt="sm">
          {touched.email && errors.email}
        </Text>
      </Div>
    </Div>
  // highlight-end

  <Text fontSize="text300" color="gray600" mt="xl">
    Password
  </Text>

  <Input
    mt="sm"
    py="lg"
    placeholder="Password"
    secureTextEntry
    value={values.password}
    onChangeText={handleChange('password')}
    onBlur={handleBlur('password')}
  />

  // highlight-start
    <Div h={20}>
      <Div position="absolute" top={0} zIndex={1}>
        <Text color="red500" fontSize="text300" mt="sm">
          {touched.password && errors.password}
        </Text>
      </Div>
    </Div>
  // highlight-end
...
```

</div>

  <div class="absolute top-0" style="right: -330px;">
    <img src="/images/blogs/using-formik-with-react-native-and-magnus/2.gif" class="mobile" style="width: 320px;"  />
  </div>
</div>

## Few points

1. Your form will remain in submitting state when errors occur when it is submitted. You will need to manually set it to false by using `setSubmitting` prop.
2. You will need to manually handle errors that occur on form submission. For e.g. - When Username/Password is wrong, You will need to manually show the error to the user. You can do it using `setStatus` prop.
