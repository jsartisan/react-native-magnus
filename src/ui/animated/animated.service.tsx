import * as Animatable from 'react-native-animatable';

export const registerAnimations = () => {
  Animatable.initializeRegistryWithDefinitions({
    'magnus-none': {
      0: {},
      1: {},
    },
    'magnus-fade': {
      0: {
        opacity: 0,
      },
      1: {
        opacity: 1,
      },
    },
    'magnus-fromRight': {
      0: {
        opacity: 0,
        left: 30,
      },
      1: {
        opacity: 1,
        left: 0,
      },
    },
    'magnus-fromLeft': {
      0: {
        opacity: 0,
        right: 30,
      },
      1: {
        opacity: 1,
        right: 0,
      },
    },
    'magnus-fromTop': {
      0: {
        opacity: 0,
        bottom: 30,
      },
      1: {
        opacity: 1,
        bottom: 0,
      },
    },
    'magnus-fromBottom': {
      0: {
        opacity: 0,
        top: 30,
      },
      1: {
        opacity: 1,
        top: 0,
      },
    },
  });
};
