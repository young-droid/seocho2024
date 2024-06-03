var assert = require('assert');

const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park];

function addUser(user) {}

//filter 사용!
function removeUser(user) {
  return users.filter((u) => u.id != user.id);
}

function changeUser() {}

addUser(hong); // [kim, lee, park, hong]
removeUser(lee); // [kim, park]
changeUser(kim, choi); // [choi, lee, park]

const ret2 = removeUser(lee);
console.log('🚀 ~ ret2:', ret2);

///////////////////////////////////////////
console.log('=======================');
// 2) 다음과 같이 작동하는 classNames 함수를 작성하시오.

function classNames(...args) {
  console.log('🚀 ~ classNames ~ args:', args);
  return args.join('_');
}

// const classNames = (...args) => ;
const ret3 = classNames('', 'a b c', 'd', '', 'e');

console.log('🚀 ~ ret3:', ret3);
// assert.strictEqual(ret2, 'a b c d e');
// 주의: ' a b c d  e'면 안됨!!
