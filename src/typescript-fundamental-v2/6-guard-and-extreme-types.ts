/* eslint-disable @typescript-eslint/no-unused-vars */
const isUnknown: unknown = 'hello, unknown';

// build in type guard: typeof
if (typeof isUnknown === 'string') {
  // 這裡可以確保 isUnknown 是 string
  isUnknown.split(', ');
}

// build in type guard: instanceof
if (isUnknown instanceof Promise) {
  // 這裡可以確保 isUnknown 是 Promise
  isUnknown.then((x: unknown) => x).catch((err: Error) => err);
}

function isString(s: unknown): s is string {
  return typeof s === 'string';
}

if (isString(isUnknown)) {
  // 這裡可以確保 isUnknown 是 string
  isUnknown.split(', ');
}

// 如果 arg 沒加上 undefined，則 filtered 的型別會推導成 (string | undefined)[]
// 但若是使用 arg: T | undefined，則 undefined 會從該型別被抽出，因此最終會推導成 string[]
function isDefined<T>(arg: T | undefined): arg is T {
  return typeof arg !== 'undefined';
}

function assertIsStringArray(arr: unknown[]): asserts arr is string[] {
  if (!arr) throw new Error('not an array!');
  const hasNonString = arr.some((item) => typeof item !== 'string');
  if (hasNonString) throw new Error('not an array of string!');
}

const list = ['foo', 'bar', undefined];
assertIsStringArray(list);

const arr: (string | number)[] = ['3', '2', '21'];
assertIsStringArray(arr);

function showNever(arg: string | number) {
  if (typeof arg === 'string') {
    arg.split(',');
  } else if (typeof arg === 'number') {
    arg.toFixed(2);
  } else {
    // here, arg is never
  }
}

export {};
