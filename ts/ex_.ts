const SIZE = [
  { id: 'XS', price: 8000 },
  { id: 'S', price: 10000 },
  { id: 'M', price: 12000 },
  { id: 'L', price: 14000 },
  { id: 'XL', price: 15000 },
] as const;

const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };

const totalPrice = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
  0
);

console.log('🚀 ~ totalPrice:', totalPrice);

const counts = {
  apple: 3,
  banana: 5,
};
counts.apple;
counts.banana = 5;

console.log('🚀 ~ counts.apple:', counts.apple);

console.log('============================');

type Ud2 = (User | Dept) & { addr: string };

// interface User {
//   id: number;
//   name: string;
// }

// interface Dept {
//   id: number;
//   dname: string;
//   captain: string;
// }
// interface Ud2 {
//   [key: string]: string | number
//   id: number;
//   addr: string;
// }

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
const ud3: Ud2 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };

ud2.