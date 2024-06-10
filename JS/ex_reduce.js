const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;

const arr = [1, 2, 3, 4, 5];

const ret1 = arr
  .map((a) => a ** 2)
  .map((a) => Math.sqrt(a))
  .map((a) => a ** 3);
console.log('🚀 ~ ret:', ret1);

// const ret2 = arr.reduce((acc, v) => cube(Math.sqrt(v ** 2)), []);
const ret2 = arr.reduce((acc, v) => [...acc, cube(sqrt(square(v)))], []);
console.log('🚀 ~ ret2:', ret2);

const ret3 = [square, sqrt, cube].reduce((acc, f) => acc.map((v) => f(v)), arr);
console.log('🚀 ~ ret3:', ret3);
// const ret3 = [square, sqrt, cube].reduce((acc, f) => arr.map(f));
// console.log('🚀 ~ ret3:', ret3);

// const ret4 = [sqrt, square, cube].reduce((acc, f) => arr.map(f));
// console.log('🚀 ~ ret4:', ret4);

// const ret5 = [sqrt, cube, square].reduce((acc, f) => arr.map(f));
// console.log('🚀 ~ ret5:', ret5);
const ret6 = [cube, sqrt, square].reduce((acc, f) => arr.map(f));
console.log('🚀 ~ ret6:', ret6);

function calc(values, fns) {
  return fns.reduce((results, f) => results.map((v) => f(v)), values);
}
// calc([2,3,4])////////////////////하다말고 놓침. 교수님 git 확인 필요
