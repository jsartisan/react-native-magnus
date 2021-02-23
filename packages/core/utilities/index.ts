import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Dimensions } from 'react-native';
import {
  validateHTMLColorRgb,
  validateHTMLColorSpecialName,
  validateHTMLColorHex,
  validateHTMLColorHsl,
} from 'validate-color';

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

/**
 * useState with callback
 *
 * @param initialState
 */
export const useStateCallback = (initialState: any) => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // mutable ref to store current callback

  const setStateCallback = (state: any, cb: any) => {
    cbRef.current = cb; // store passed callback to ref
    setState(state);
  };

  useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      //@ts-ignore
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
};

export const isValidColor = (color: string): boolean => {
  return (
    validateHTMLColorRgb(color) ||
    validateHTMLColorSpecialName(color) ||
    validateHTMLColorHex(color) ||
    validateHTMLColorHsl(color)
  );
};

export const getSpecificProps = <T extends object>(obj: T, ...keys: string[]) =>
  //@ts-ignore
  keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});

export const removeSpecificProps = <T extends object>(
  obj: T,
  ...keys: string[]
): T =>
  keys.reduce((a, c) => {
    //@ts-ignore
    delete a[c];
    return a;
  }, obj);
