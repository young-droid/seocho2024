var stack = [];
var queue = [];

stack.push(1);
stack.push(2);
stack.push(3);

var stackOutput = stack.pop();
stack.shift;
// stack.unshift(9);

queue.push(10);
queue.push(20);
queue.push(30);

var queueOutput = queue.shift();

console.log('🚀 ~ stack:', stack, stackOutput);
console.log('🚀 ~ queue:', queue, queueOutput);

const list = ['글3', '글2', '글1'];

function addArticle(article) {
  list.unshift(article);
}

function removeOld() {
  list.pop();
}

addArticle('글4');
removeOld();
removeOld();

list.push('글4');

console.log('🚀 ~ list:', list);

console.log(list.indexOf('글4'));
console.log(list.lastIndexOf('글4'));

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const park = { id: 3, name: 'Park' };
const choi = { id: 4, name: 'Choi' };

const users = [park, kim, hong, choi];

/*
const id2user = users.findIndex((v, i) => {
  return v.id == 2;
});
*/

// user중 id가 2인 사람의 인덱스값 받기
const id2userIndex = users.findIndex((v, i) => v.id == 2);
console.log('🚀 ~ id2userIndex:', id2userIndex);

//
const id2user = users.find((v) => v.id == 2);
console.log('🚀 ~ id2user:', id2user);

for (const user of users) {
  console.log(user.id, user.name);
}

users.forEach((user) => console.log(user.id, user.name));

const userIds = users.map((v) => v.id);
console.log('🚀 ~ userIds:', userIds);

const evenUsers = users.filter((v) => v.id % 2 == 0);
console.log('🚀 ~ evenUsers:', evenUsers);

const isEveryLess5 = users.every((v) => v.id < 5);
console.log('🚀 ~ isEveryLess5:', isEveryLess5);

const isSomeOdd = users.some((v) => v.id % 2 == 1);
console.log('🚀 ~ isSomeOdd:', isSomeOdd);

const userNames = users.map((v) => v.name);
console.log('🚀 ~ userNames:', userNames);

// const end = users[users.length - 1];
const end = users.at(-1);
console.log('🚀 ~ end:', end);
const beforeEndArray = users.at(-2);
// const beforeEnd = users[users.length - 2];
console.log('🚀 ~ beforeEndArray:', beforeEndArray);

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

// const arr4 = arr1.concat(arr2, arr3);
const arr4 = [...arr1, ...arr2, ...arr3];
console.log('🚀 ~ arr4:', arr4);

/////////////////////////////////////////////////////////////////////////
console.log('--------------Slice & Splice----------------');

let arrSS;
arrSS = [1, 2, 3, 4, 5];

arrSS.slice(1, 3); // [2,3]

arrSS.slice(1, -2); // [2,3]

arrSS.slice(-4, -2); // [2,3]

const a24 = arrSS.slice(2); // [3,4,5]
console.log('🚀 ~ a24:', a24);

const a25 = arrSS.slice(-3); // [3,4,5]
console.log('🚀 ~ a25:', a25);
// The Law of Inertia!
// [...arr2.slice(0,3), ...arr2.slice(3)]

arrSS = [1, 2, 3, 4, 5];

arrSS.splice(1, 3); // [2, 3, 4] 리턴(3개삭제)
// 현재 arrSS = [1, 5]
arrSS.splice(1, 0, 2, 3, 4); // 복원(원위치)
// 현재 arrSS = [1, 2, 3, 4, 5]
arrSS.splice(2); // [3, 4, 5] 리턴(삭제)
// 현재 arrSS = [1,2]
arrSS.splice(2, 0, 3, 4, 5); // 복원
// 현재 arrSS = [1,2,3, 4, 5]
arrSS.splice(2, 1, 'X', 'Y', 'Z');
// 2부터 1개 지우고, 3개 문자 추가
//   [1, 2, 'X', 'Y', 'Z', 4, 5]
