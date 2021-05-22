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

/* Index Signatures or Dictionary Type */
interface PhoneNumberDict {
  // 因為物件的 key 可能沒有對應的 value，因此要記得加上 undefined
  [numberName: string]:
    | undefined
    | {
        areaCode: number;
        num: number;
      };

  // 搭配 indexed signatures 使用時，表示這兩個屬性必須存在
  home: {
    areaCode: number;
    num: number;
  };
  office: {
    areaCode: number;
    num: number;
  };
}

const phoneDict: PhoneNumberDict = {
  // home: {araeCode: 321, num: 333},  // 可以避免 typo
  home: { areaCode: 123, num: 456 },
  office: { areaCode: 321, num: 456 },

  // 因為有定義 indexed signatures，所以可以添加額外的屬性
  registered: { areaCode: 666, num: 333 },
};

export {};
