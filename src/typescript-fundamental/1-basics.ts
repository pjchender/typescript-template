type Circle = {
  color: string;
  radius: number;
};

type Rectangle = {
  color: string;
  width: number;
  height: number;
};

// 只需符合 Circle 的屬性或 Rectangle 的屬性即可
const foo: Circle | Rectangle = {
  color: 'red',
  radius: 15,
  height: 20,
};

// 需要同時帶有 Circle 和 Rectangle 中的屬性（缺一不可）
const bar: Circle & Rectangle = {
  color: 'red',
  radius: 15,
  width: 30,
  height: 20,
};

export interface HasEmail {
  name: string;
  email: string;
}

export interface HasPhoneNumber {
  name: string;
  phone: string;
}
