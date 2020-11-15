import * as React from 'react';
import { Dimensions } from 'react-native';

const WINDOW = Dimensions.get('window');

export const WINDOW_WIDTH = WINDOW.width;
export const WINDOW_HEIGHT = WINDOW.height;

//is the value an empty array?
export const isEmptyArray = (value?: any) =>
  Array.isArray(value) && value.length === 0;

// is the given object a Function?
export const isFunction = (obj: any): obj is Function =>
  typeof obj === 'function';

// is the given object an Object?
export const isObject = (obj: any): obj is Object =>
  obj !== null && typeof obj === 'object';

// is the given object an integer?
export const isInteger = (obj: any): boolean =>
  String(Math.floor(Number(obj))) === obj;

// is the given object a string?
export const isString = (obj: any): obj is string =>
  Object.prototype.toString.call(obj) === '[object String]';

// is the given object a NaN?
// eslint-disable-next-line no-self-compare
export const isNaN = (obj: any): boolean => obj !== obj;

// Does a React component have exactly 0 children?
export const isEmptyChildren = (children: any): boolean =>
  React.Children.count(children) === 0;

// is the given object/value a promise?
export const isPromise = (value: any): value is PromiseLike<any> =>
  isObject(value) && isFunction(value.then);

// is the given object/value a type of synthetic event?
export const isInputEvent = (value: any): value is React.SyntheticEvent<any> =>
  value && isObject(value) && isObject(value.target);
