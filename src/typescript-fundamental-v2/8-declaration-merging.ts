/* eslint-disable */
// @ts-nocheck
function foo(): void {}
interface Bar {}
namespace baz {
  export const biz = 'hello';
}

/**
 * 檢查一個東西是不是 value：指派到的一個變數
 * */
const x = Bar; // 'Bar' only refers to a type, but is being used as a value here.

/**
 * 檢查一個東西是不是 type：把它當作型別來指派
 */
const y: foo; // 'foo' refers to a value, but is being used as a type here

/**
 * variable, interface / type, namespace 都是可以被匯入匯出的
 */
export { Bar, baz, foo };
