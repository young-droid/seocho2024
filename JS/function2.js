const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));

const fx = f2(Math.max);
fx(1, 3, 5, 7);

function samef2(f) {
  // 이 함수 속 f 는 이 라인의 f, 이 밑 return~ 가 클로저
  return function (...args) {
    console.log(f.name, f(...args));
  };
}

console.log('-------------');

const fns = [Math.max, Math.min];
for (const f of fns) {
  console.log(f.name, f(1, 3, 5));
}

// const af1 = (...args) => console.log(f.name, f(...args));

// const af2 = (...args) => console.log(f.name, f(...args));

// const f22 = function (f) {
//   return af2;
// };

// f2(Math.max)(1, 3, 2, 5, 4);
// // const X = f2(Math.max);
// // X(1, 3, 2, 5, 4);

// const anotherf2 =
//   (f) =>
//   (...args) =>
//     console.log(f.name, f(args));
// // currying

const f = () => () => {};

const af = () => {};
// function af() {}

// const ff = () => af;

// function ff2() {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// }

// function f2222(f) {
//   return function (...args) {
//     console.log(f.name, f(...args));
//   };
// }

console.log('===============');

const arr = [1, 2, 3, 4, 5];
// const arr = new Array (1,2,3,4,5)
Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};
console.log(arr.first(), arr.last());

//callback 함수
{
  ['1', '2', '3'].map((a, idx, org) => parseInt(a));
  console.log(
    "🚀 ~ ['1', '2', '3'].map((a, idx, org) => parseInt(a)):",
    ['1', '2', '3'].map((a, idx, org) => parseInt(a))
  );
}
{
  ['1', '2', '3'].map(parseInt); // 아래와 같다
  console.log(
    "🚀 ~ ['1', '2', '3'].map(parseInt):",
    ['1', '2', '3'].map(parseInt)
  );
}
{
  [('1', '2', '3')].map((a, idx, org) => parseInt(a, idx, org)); // 위와 같다
  console.log(
    "🚀 ~ ['1', '2', '3'].map((a, idx, org) => parseInt(a, idx, org)):",
    ['1', '2', '3'].map((a, idx, org) => parseInt(a, idx, org))
  );
}

const arr2 = ['1', '2', '3'];
const ret2 = arr2.map(Number);
console.log('🚀 ~ ret2:', ret2);

Array.prototype.mapX = function (f) {
  const rets = [];
  for (let i = 0; i < this.length; i++) {
    rets.push(f(this[i], i, this));
  }
  return rets;
};
const ret3 = arr2.mapX(Number);
console.log('🚀 ~ ret3:', ret3);

const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));

['1', '2', '3'].map(unary(parseInt)); // 아래와 같다
console.log(
  "🚀 ~ ['1', '2', '3'].map(parseInt):",
  ['1', '2', '3'].map(unary(parseInt))
);
