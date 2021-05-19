/* eslint-disable @typescript-eslint/no-unused-vars */
import { HasEmail, HasPhoneNumber } from './1-basics';

export interface HasInternationalPhoneNumber extends HasPhoneNumber {
  countryCode: string;
}

interface ContactMessenger1 {
  (contact: HasEmail | HasPhoneNumber, message: string): void;
}

// ContactMessenger1 改用 type alias 的方式定義
type ContactMessenger2 = (
  contact: HasEmail | HasPhoneNumber,
  message: string
) => void;

// 將函式套用定義好的 interface
const emailer: ContactMessenger1 = (_contact, _message) => {
  /* ... */
};
