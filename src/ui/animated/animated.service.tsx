import * as Animatable from "react-native-animatable";

export const registerAnimations = () => {
  Animatable.initializeRegistryWithDefinitions({
    "magnus-fromTop": {
      0: {
        opacity: 0,
        left: 30
      },
      1: {
        opacity: 1,
        left: 0
      }
    }
  });
};
