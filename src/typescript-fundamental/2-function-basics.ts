/* eslint-disable @typescript-eslint/no-unused-vars */
import { HasEmail, HasPhoneNumber } from './1-basics';

function sendEmail(to: HasEmail): { recipient: string; body: string } {
  return {
    recipient: `${to.name} <${to.email}>`, // Aaron <pjchender@gmail.com>
    body: "You're pre-qualified for a loan",
  };
}

// arrow function
const sendTextMessage = (
  to: HasPhoneNumber
): { recipient: string; body: string } => {
  return {
    recipient: `${to.name} <${to.phone}>`, // Aaron <0912345678>
    body: "You're pre-qualified for a loan",
  };
};

// rest params（其餘運算子）
const sum = (...values: number[]) =>
  values.reduce((accumulate, curr) => accumulate + curr, 0);
const total = sum(1, 2, 3, 4);

/**
 * Provide multiple function signatures (overload signatures)
 */
// "overload signatures"
function contactPeople(method: 'email', ...people: HasEmail[]): void;
function contactPeople(method: 'phone', ...people: HasPhoneNumber[]): void;

// "function implementation": 需要同時符合 overload signatures 的情況
// 期望 method 是 emails 時，...people 的型別是 HasEmail[]
// 而 method 是 phone 時，...people 的型別是 HasPhoneNumber[]
// 這時可以在函式的上方撰寫 overload signatures
function contactPeople(
  method: 'email' | 'phone',
  ...people: (HasEmail | HasPhoneNumber)[]
) {
  if (method === 'email') {
    (people as HasEmail[]).forEach(sendEmail);
  } else if (method === 'phone') {
    (people as HasPhoneNumber[]).forEach(sendTextMessage);
  }
}

contactPeople('email', { name: 'Aaron', email: 'pjchender@gmail.com' });
// contactPeople('phone', { name: 'Aaron', email: 'pjchender@gmail.com' }); // this should not work cause of no phone number
