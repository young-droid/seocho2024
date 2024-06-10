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
