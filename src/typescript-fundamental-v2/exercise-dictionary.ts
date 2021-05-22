/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// Dictionary 的一個特點是每個 value 的型別都是相同的

type Dict<T> = {
  [key: string]: T | undefined;
};

function mapDict<T, S>(
  dict: Dict<T>,
  transform: (arg: T, index: number) => S
): Dict<S> {
  /* 寫法一 */
  // const out: Dict<S> = {};

  // Object.keys(dict).forEach((dKey, idx) => {
  //   out[dKey] = transform(dict[dKey], idx);
  // });

  // return out;

  /* 寫法二 */
  return Object.fromEntries(
    Object.entries(dict).map(([dKey, dValue], idx) => {
      return [dKey, transform(dValue, idx)];
    })
  );
}

// TypeScript 會自動推斷 T 和 S
mapDict(
  {
    a: 'a',
    b: 'b',
  },
  (str) => [str]
);

const fileExtensions: Dict<string[]> = {
  typescript: ['ts'],
  javascript: ['js'],
  jpeg: ['jpg', 'jpeg'],
  html: ['html', 'htm'],
};

const result = mapDict(fileExtensions, (exts) =>
  exts.map((e) => `*.${e}`).join(', ')
);
console.log(result);

export {};
