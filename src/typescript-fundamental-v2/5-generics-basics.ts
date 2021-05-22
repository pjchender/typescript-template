/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * 可以透過 extends 給泛型限制
 */
interface WrappedValue<T extends string> {
  value: T;
}

/**
 *  接收 array: T[] 做為參數，回傳 Dictionary {[k: string]: T}
 */
const arrayToDict = <T extends { id: string }>(
  array: T[]
): { [k: string]: T } => {
  const out: { [k: string]: T } = {};
  array.forEach((val) => {
    out[val.id] = val;
  });
  return out;
};

/**
 * 泛型一樣有 scope 的概念
 */
const startTuple =
  <T>(a: T) =>
  <U>(b: U) =>
    [a, b] as [T, U];

// 上面 arrow function 和這個的意思相同
// function startTuple<T>(a: T) {
//   return function finishTuple<U>(b: U) {
//     return [a, b] as [T, U];
//   };
// }

// const myTuple: [string[], number]
const myTuple = startTuple(['first'])(42);

type Shape = {
  draw(): void;
  isDrawn: boolean;
};

interface Circle extends Shape {
  radius: number;
}

function drawShape<S extends Shape>(shapes: S[]): S[] {
  return shapes.map((shape) => {
    shape.draw();
    return {
      ...shape,
      isDrawn: true,
    };
  });
}

// function drawShape<Shape>(shapes: Shape[]): Shape[]
drawShape<Circle>([{ draw: () => {}, isDrawn: false, radius: 5 }]).map(
  (shape) => {
    return shape.radius;
  }
);

export {};
