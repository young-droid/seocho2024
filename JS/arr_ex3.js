// 1) 배열의 각 원소를 String으로 변환하시오.
const assert = require('assert');
const arr = [1, 2, 3, true];
const ret1 = arr.map((a) => a.toString());
console.log('🚀 ~ ret1:', ret1);

assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

console.log('====================');
// 2) 다음과 같이 작동하는 classNames 함수를 작성하시오.

// function classNames(...args) {
//   console.log('🚀 ~ classNames ~ args:', args);
//   args.map((a) => !!a.trim);
//   return args.join(' ');
// }

const classNames = (...args) => args.filter((a) => !!a.trim()).join(' ');
const ret2 = classNames('', 'a b c', 'd', '', 'e');

console.log('🚀 ~ ret2:', ret2);
// assert.strictEqual(ret2, 'a b c d e');
// 주의: ' a b c d  e'면 안됨!!

console.log('====================');

function classNames2(...args) {
  return args
    .join(' ') // ' a b  c  d  e '
    .trim() // ' a b  c  d  e '
    .split(' ') // ['a', 'b', '', 'c', '',  'd', '', 'e']
    .filter((a) => !!a.trim()) //['a', 'b', 'c', 'd', 'e']
    .join(' '); // 'a b c d e'
}
// const classNames2 = (...args) => args.filter((a) => !!a.trim()).join(' ');
const ret3 = classNames2('', 'a b  c', ' d', '', 'e ');

console.log('🚀 ~ ret3:', ret3);

// filter((a) => !!a.trim()).join(' ')
