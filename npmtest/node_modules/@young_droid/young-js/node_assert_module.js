var assert = require('assert');

// assert.equal(1, '1', 'Not Equal!!');
// assert.deepEqual(1, '1', 'Not Equal!!');
// assert.deepStrictEqual(1, '1', 'Not Equal!!');

function push(array, ...toPushData) {
  return [...array, ...toPushData];
}

const arr1 = [1, 2, 3, 5];
const ret1 = push(arr1, 7, 8);
console.log('🚀 ~ ret1:', ret1);

// assert.equal(arr1, [1, 2, 3, 4, 7, 8]);

const arr = [1, 2, 3, 4];

// let sum = 0;
// for (const a of arr) {
//   sum = sum + a;
// }
// console.log('🚀 ~ sum:', sum);
const sum = arr.reduce((sum, a) => {
  return sum + a;
});
console.log('🚀 ~ sum:', sum);

// ex) objs의 각 원소를 reduce를 이용하여 합쳐보세요.
const objs = [{ id: 1 }, { name: 'Hong' }, { addr: 'Seoul', id: 5 }];
const obj = objs.reduce((obj, objs) => {
  return obj + objs;
});
console.log('🚀 ~ obj ~ obj:', obj);
//{id: 5, name: 'Hong', addr: 'Seoul'}
assert.deepStrictEqual(obj, { id: 5, name: 'Hong', addr: 'Seoul' });
