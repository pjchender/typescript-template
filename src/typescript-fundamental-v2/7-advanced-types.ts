/* eslint-disable @typescript-eslint/no-unused-vars */

import { HasEmail, HasPhoneNumber } from './1-basics';

/**
 * Mapped Type 可以透過 key 來取得 interface 中 value 的型別
 */
interface CommunicationMethods {
  email: HasEmail;
  phone: HasPhoneNumber;
  fax: { fax: number };
}

type AllCommKeys = keyof CommunicationMethods; // "email" | "phone" | "fax"
type AllCommValues = CommunicationMethods[keyof CommunicationMethods]; // HasEmail | HasPhoneNumber | {fax: number;}

// keyof CommunicationMethods 會把 'email' | 'phone' | 'fax' 組成新的 type
// 所以這裡的 K 一定要滿足 'email' | 'phone' | 'fax' 的條件
// content 用的是 MappedType，所以會是 HasEmail | HasPhoneNumber | { fax: number }
function contact<K extends keyof CommunicationMethods>(
  method: K,
  content: CommunicationMethods[K] // 💡turning key into value -- a *mapped type*
) {
  // ...
}
contact('email', { name: 'foo', email: 'foo@example.com' });
// contact('phone', { name: 'foo', email: 'foo@example.com' }); // ❌ 報錯，phone 要對應到的是 HasPhoneNumber
contact('fax', { fax: 3000 });

/**
 * 利用 Mapped Type 產生新的型別
 */

type OptionsFlags<T> = {
  [P in keyof T]: boolean;
};
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

// P in keyof T 指的會是 "darkMode" | "newUserProfile"
// 因此 FeatureOptions 的型別會是 { darkMode: boolean; newUserProfile: boolean }
type FeatureOptions = OptionsFlags<FeatureFlags>;

/**
 * Mapped 後產生新的 Key 名稱
 */
type ReMapWithGet<T> = {
  // 因為 P 有可能是 string | number | symbol，透過 string & P 可以限制它一定是 string
  [P in keyof T as `map${Capitalize<string & P>}`]: T[P];
};
type Person = {
  fullName: string;
  phoneNumber: number;
};

// NewPerson 的型別會是 { mapFullName: string; mapPhoneNumber: number; }
type NewPerson = ReMapWithGet<Person>;

/**
 * Mapped 搭配 Exclude 移除屬性
 */

type ExcludeMap<T> = {
  [P in keyof T as Exclude<P, 'fullName'>]: T[P];
};
// OnlyPhoneNumber 的型別會是 type OnlyPhoneNumber = { phoneNumber: number; }
type OnlyPhoneNumber = ExcludeMap<Person>;

export {};
