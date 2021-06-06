---
title: Icons
date: "2019-08-13"
description: ""
---

Every site have distinct sets of icons that they use throughout to maintain consistency. So, we didn't wanted to enforce any icon guidelines onto our users. So, we chose `react-native-vector-icons` for our icon system which provides over 3k+ icons from popular libraries.

> You can browse all icons from this link - <a target="_blank" href="https://oblador.github.io/react-native-vector-icons/">https://oblador.github.io/react-native-vector-icons/</a>

- [`AntDesign`](https://ant.design/) by AntFinance (**297** icons)
- [`Entypo`](http://entypo.com) by Daniel Bruce (**411** icons)
- [`EvilIcons`](http://evil-icons.io) by Alexander Madyankin & Roman Shamin (v1.10.1, **70** icons)
- [`Feather`](http://feathericons.com) by Cole Bemis & Contributors (v4.21.0, **279** icons)
- [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/icons/) by Dave Gandy (v4.7.0, **675** icons)
- [`FontAwesome 5`](https://fontawesome.com) by Fonticons, Inc. (v5.7.0, 1500 (free) **5082** (pro) icons)
- [`Fontisto`](https://github.com/kenangundogan/fontisto) by Kenan Gündoğan (v3.0.4, **615** icons)
- [`Foundation`](http://zurb.com/playground/foundation-icon-fonts-3) by ZURB, Inc. (v3.0, **283** icons)
- [`Ionicons`](https://ionicons.com/) by Ben Sperry (v4.2.4, **696** icons)
- [`MaterialIcons`](https://www.google.com/design/icons/) by Google, Inc. (v3.0.1, **932** icons)
- [`MaterialCommunityIcons`](https://materialdesignicons.com/) by MaterialDesignIcons.com (v4.0.96, **4416** icons)
- [`Octicons`](http://octicons.github.com) by Github, Inc. (v8.4.1, **184** icons)
- [`Zocial`](http://zocial.smcllns.com/) by Sam Collins (v1.0, **100** icons)
- [`SimpleLineIcons`](https://simplelineicons.github.io/) by Sabbir & Contributors (v2.4.1, **189** icons)

### Changing Icon types
you can easily change the Icon family by using the `fontFamily` prop. For example

![Screenshot_20210602-215728~2](https://user-images.githubusercontent.com/57273445/120553581-90923380-c3f0-11eb-85ff-202a5d10771a.png)

```jsx
import { Icon, Div } from "react-native-magnus";
<Div row my={32} flex={1} alignItems='center' justifyContent='space-around'>
 <Icon name='map-pin' fontFamily='Feather' fontSize={32} color='white' bg='blue500' h={60} w={60} rounded='md' />
 <Icon name='location-pin' fontFamily='MaterialIcons' fontSize={32} color='black' bg='yellow500' h={60} w={60} rounded='md' />
 <Icon name='location-outline' fontFamily='Ionicons' fontSize={32} color='white' bg='blue500' h={60} w={60} rounded='md' />
 <Icon name='location' fontFamily='Octicons' fontSize={32} color='black' bg='red500' h={60} w={60} rounded='md' />
</Div>
```
