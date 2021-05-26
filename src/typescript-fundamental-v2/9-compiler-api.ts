/* eslint-disable */
// @ts-nocheck
import * as path from 'path';
import * as ts from 'typescript';

// function isDefined<T>(x: T | undefined): x is T {
//   return typeof x !== 'undefined';
// }

const isDefined = <T>(x: T | undefined): x is T => {
  return typeof x !== 'undefined';
};

const foo = ['a', 'b', undefined];
const stringArray = foo.filter(isDefined);
