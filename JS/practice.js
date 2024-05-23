//오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
const WEEK_NAMES = "일월화수목금토";
const dt = new Date();
const todayName = WEEK_NAMES[dt.getDay()];
console.log(`오늘은 ${todayName}요일 입니다.`);
// console.log("🚀 ~ dt:", dt, dt.getDay());

//user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오. (function signature를 3개 이상으로 표현하기)

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

// f1(hong);
// F2;
// 1, "Hong";
// console.log(id, name);

function f1(x, y) {}
var f2 = function (x, y) {};
const f3 = (x, y) => {};

const f3_1 = (user) => `id=${user.id}, name=${user.name}`;
const f3_2 = (user) => console.log(id, name);
const f3_3 = ({ id, name }) => console.log(id, name);

//다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.

const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

//console.log(userInfo);
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}

//다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const id1 = arr[0][0].id;
const id2 = arr[1][0].id;
const id3 = arr[1][1].id;
console.log(id1, id2, id3);
// 출력결과: 1 2 3

console.log(Number(0.1 + 0.2).toString(2));
