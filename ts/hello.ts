const myName = 'YoungJ';
let s = 'abc';
console.log('Hello World!');
console.log(`Hello, ${myName}`);

let firstName: String | undefined | boolean;
firstName = 'asdf';
console.log('🚀 ~ firstName:', firstName);
firstName?.toUpperCase();
firstName = false;
console.log('🚀 ~ type:', firstName);

const str: string = 'abc';
type User = { id: number; name: string; addr?: string };
const user: User = { id: 1, name: 'Hong' };
user.addr = 'Seoul';

type Emp = { id: number; name: string; dept: string | number };
const emp: Emp = {
  id: 1,
  name: 'Kim',
  dept: 'Sales',
};
emp.dept = 12;

type Member = {
  name: string;
  addr: string;
  discountRate: number;
  spend: number[];
};
type Guest = {
  name: string;
  age: number;
  spend: number;
};

const member: Member = {
  name: '홍길동',
  addr: '용산구',
  discountRate: 0.1,
  spend: [10000, 20000],
};
const guest: Guest = {
  name: '김길동',
  age: 28,
  spend: 1,
};
const who = Math.random() > 0.5 ? member : guest;
who.name = 'Lee';

if ('addr' in who) console.log(who.discountRate);

console.log('typeof who.spend :', typeof who.spend);

if (typeof who.spend != 'number') console.log(who.spend);

type XUser = { id: number; name: string };

type XEmp = { id: number; name: string; age: number };

// xuser = {id: 1}; // Error (Property 'name' missing in type)
let xuser: XUser = { id: 1, name: 'useruser' }; // OK
let xemp: XEmp = { id: 2, name: 'empemp', age: 30 }; // Error ({id, name, age} is not assignable to type {id,name} )
//  ⇐ Freshness!
xuser = xemp; // <- Covariance
// xemp = xuser; // <- Error! Contravariance

function getX1(obj: XUser) {
  return obj.name;
}
console.log(getX1(xuser));

console.log('===========================');

type Mul = (a: number, b: number, c?: number, d?: number) => number;

// function mul(a: number, b: number): number;
// function mul(a: number, b: number, c: number): number;

function mul(a: number, b: number, c?: number, d?: number) {
  if (typeof c === 'number' && typeof d === 'number') return a * b * c * d;
  if (typeof c === 'number') return a * b * c;
  return a * b;
}

console.log(mul(1, 2, 3, 4));
console.log(mul(1, 2, 3));
console.log(mul(1, 2));

console.log('===========================');

const oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type NaverKakaoUser = {
  id: number;
  // nickname: string;
  // name: string;
  // email: string;
  [k: string]: string | number;
};

// const kUser: NaverKakaoUser =

const nums1 = [1, 2, 3, 4, 5]; // number[]
const nums2 = [10, 20, 30, 40, 50]; // number[]

const result1 = nums1.concat(nums2);
// 당연히 result1은 number[]

const strings1 = ['lim', 'eun', 'ha'];
// const result2 = result1.concat(strings1);
const result2 = [...result1, ...strings1];
console.log('🚀 ~ result2:', result2);

type A = {
  name: string;
  age: number;
};

type B = {
  name: string;
  addr: string;
};
const onlyA: A[] = [
  { name: 'lim', age: 10 },
  { name: 'hong', age: 20 },
];
const onlyB: B[] = [
  { name: 'jang', addr: 'Seoul' },
  { name: 'park', addr: 'Busan' },
];
const aOrB = [...onlyA, ...onlyB];
// (A|B)[]
