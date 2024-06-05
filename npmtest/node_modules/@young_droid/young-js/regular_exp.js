console.log('=================');

const assert = require('assert');

const regexp1 = /[A-Z]/g; // 정규식 리터럴
//  cf. regexp1.flags: flag를 string으로 출력, regexp1.lastIndex: s flag 시 찾을 위치의 index

const regexp2 = new RegExp(/[A-Z]/, 'g'); // 정규식(RegExp) 객체 (pattern, flag?)
//   ⇒⇒⇒ 활용 ⇒ const re1 = '[A-Z]';  const regexp3 = new RegExp(re1);  // 문자열을 정규식 화!

const str = 'Senior Coding Learning JS'; // 문자열
regexp1.test(str); // true
assert.deepStrictEqual(regexp1.exec(str), str.match(regexp1)); // 통과!
str.match(regexp1); // ['S', index: 0, input: 'Senior Coding Learning JS',
regexp1.exec(str); //                                         groups: undefined]

str.match(/[A-Z]/g); // [ 'S', 'C', 'L', 'J', 'S' ]
str.match(/Learning JS/).test(str); // true
str.match(/Learning TS/).test(str); // false
