import { ThemeType } from '../theme/type';
import { calculateCurrentDeviceBreakpoint } from '../theme/theme.service';

const DEFAULT_BREAKPOINTS: { [index: string]: number } = {
  sm: 320,
  md: 480,
  lg: 768,
  xl: 1024,
};

export const defaultTheme: ThemeType = {
  name: 'default',
  breakpoints: DEFAULT_BREAKPOINTS,
  breakpoint: calculateCurrentDeviceBreakpoint(DEFAULT_BREAKPOINTS),
  colors: {
    gray900: '#262626',
    gray800: '#404040',
    gray700: '#595959',
    gray600: '#737373',
    gray500: '#8c8c8c',
    gray400: '#a6a6a6',
    gray300: '#bfbfbf',
    gray200: '#d9d9d9',
    gray100: '#f2f2f2',

    brand900: '#420a2b',
    brand800: '#6e1147',
    brand700: '#9a1864',
    brand600: '#c61f80',
    brand500: '#e0399a',
    brand400: '#e765b0',
    brand300: '#ee91c7',
    brand200: '#f5bddd',
    brand100: '#fce9f4',

    red100: '#fce8ea',
    red200: '#f7bac1',
    red300: '#f28c98',
    red400: '#ed5e6f',
    red500: '#e83045',
    red600: '#cf172c',
    red700: '#a11222',
    red800: '#730d18',
    red900: '#45080f',

    yellow100: '#fef9e6',
    yellow200: '#fcecb5',
    yellow300: '#fae084',
    yellow400: '#f8d453',
    yellow500: '#f6c722',
    yellow600: '#ddae09',
    yellow700: '#ac8707',
    yellow800: '#7b6005',
    yellow900: '#4a3a03',

    green100: '#eefbe9',
    green200: '#cdf4bd',
    green300: '#aced91',
    green400: '#8be665',
    green500: '#69df39',
    green600: '#50c620',
    green700: '#3e9a19',
    green800: '#2c6e12',
    green900: '#1b420b',

    blue100: '#e8f2fc',
    blue200: '#bad7f7',
    blue300: '#8cbcf2',
    blue400: '#5ea1ed',
    blue500: '#3087e8',
    blue600: '#176dcf',
    blue700: '#1255a1',
    blue800: '#0d3d73',
    blue900: '#082445',

    teal100: '#e8fdfc',
    teal200: '#b9f8f5',
    teal300: '#8bf4ee',
    teal400: '#5cefe7',
    teal500: '#2eebe0',
    teal600: '#14d1c6',
    teal700: '#10a39a',
    teal800: '#0b746e',
    teal900: '#074642',

    white: '#FFFFFF',
    black: '#000000',
    transparent: 'rgba(0,0,0,0)',
  },

  fontSize: {
    'xs': 11,
    'sm': 12,
    'md': 13,
    'lg': 15,
    'xl': 17,
    '2xl': 19,
    '3xl': 21,
    '4xl': 24,
    '5xl': 27,
    '6xl': 32,
  },

  shadowColor: '#000',

  shadow: {
    'none': {},
    'xs': {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,

      elevation: 1,
    },
    'sm': {
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    'md': {
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
    },
    'lg': {
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 12,
    },
    'xl': {
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,

      elevation: 16,
    },
    '2xl': {
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
    },
  },

  borderRadius: {
    'none': 0,
    'xs': 2,
    'sm': 4,
    'md': 6,
    'lg': 8,
    'xl': 12,
    '2xl': 16,
    'circle': 1000000,
  },

  spacing: {
    'none': 0,
    'xs': 4,
    'sm': 6,
    'md': 8,
    'lg': 12,
    'xl': 24,
    '2xl': 32,
    '3xl': 64,
  },
};
