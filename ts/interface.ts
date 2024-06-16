console.log('=====interface=====');
interface A {
  a: string;
  b: string;
}

interface A {
  c: number;
  d: number;
}
let aa: A = {
  a: 'a',
  b: 'b',
  c: 1,
  d: 2,
};
console.log('🚀 ~ aa:', aa);

console.log('=====type=====');
type B = {
  a: string;
  b: string;
};
type BB = B & { c: number; d: number };

let bb: BB = {
  a: 'a',
  b: 'b',
  c: 1,
  d: 2,
};

console.log('🚀 ~ bb:', bb);
