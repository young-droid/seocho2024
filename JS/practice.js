//연산자 Operator 오퍼레이터
console.log('==== Operator 오퍼레이터 연산자 ====');

//0_1. 50p
// for문을 이용하여 다음과 같이 정확한 숫자를 출력하는 코드를 작성하시오.
function p50() {
  console.log('== 0_1. for문으로 정확한 숫자를 출력하기 ==');

  // for (let i = 0.1; i < 1; i = i + 0.1) console.log(Number(i.toFixed(1)));
  for (let i = 0.1; i < 1; i = i + 0.1) console.log(+i.toFixed(1)); //+의 또다른 의미
}
// p50();

//0_2. 51p
// 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
console.log('== 0_2. 1~10 사이 정수의 제곱근 소숫점 3자리 ==');
{
  for (let i = 1; i <= 10; i = i + 1) {
    const sq = +Math.sqrt(i).toFixed(3);
    // if (sq % 1 != 0) console.log(i, sq); //하수
    if (sq % 1) console.log(i, sq); //고수
  }
}

// 1. 52p
//오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.

function fn_prof1() {
  console.log('== 1. 오늘 날짜의 요일 출력하기 ==');

  const WEEK_NAMES = '일월화수목금토';
  const dt = new Date().getDay;
  console.log(`오늘은 ${dt}요일 입니다.`);
  // console.log("🚀 ~ dt:", dt, dt.getDay());
}

//////////////// 참고해서 추가 필요 /////////////////////
function fn_switch1() {
  console.log(`오늘은 ${wname}요일 입니다.`);
}

//fn_switch1()
///////////////////////////////////////////////////////

function fn_mine1() {
  console.log('== 1. 오늘 날짜의 요일 출력하기 ==');

  const WEEK_NAMES = '일월화수목금토';
  const dt = new Date();
  const todayName = WEEK_NAMES[dt.getDay()];
  console.log(`오늘은 ${todayName}요일 입니다.`);
  // console.log("🚀 ~ dt:", dt, dt.getDay());
}

// 1_2. 53p
//다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오.
// (단, 소숫점 자리수는 긴쪽에 맞춘다)
//// 실전 코테 문제. 삼성전자. 20분 이내 작성 필요

function fn_prof1_2() {
  console.log('== 1_2. addPoints 함수 작성하기. 긴쪽에 맞춘 소숫점 ==');

  const i = Math.max(0.21354, 0.1);
  console.log('🚀 ~ fn_prof2 ~ i:', i.length);
}

// function addPoints(a, b) {
//   const lenA = (a + '').toString().length;
//   const lenB = (b + '').toString().length;
//   console.log('🚀 ~ addPoints ~ len:', lenA);
// }
// Math.max(a, b);

function getLen(s) {
  return (s ?? '').toString().length;
}
function addPoints(a, b) {
  // let len = getLen(a)
  // if (getLen(b)> len) len = getLen(b);

  // const len = Math.max(getLen(a),getLen(b));
  const aLen = getLen(a);
  const bLen = getLen(b);
  const len = aLen > bLen ? aLen : bLen;

  const ret = (a + b).toFixed(len - 2);
  console.log('🚀 ~ addPoints ~ len:', len, ret);
}
addPoints(0.21354, 0.1);

0.21354 + 0.1; // 0.31354000000000004
0.14 + 0.28; // 0.42000000000000004
0.34 + 0.226; // 0.5660000000000001

//hint: length 쓰고, string 으로 바꾸고, Math.max 함수 사용

// 2. 못끝냄
//user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오. (function signature를 3개 이상으로 표현하기)

console.log('== 2. id와 name을 출력하는 3개의 함수 작성하기 ==');

///////////////////교수님 destructuring.js 참고/////////////////////

// // const hong = { id: 1, name: 'Hong' };
// // const lee = { id: 2, name: 'Lee' };

// const user1 = { id: 1, name: 'Hong' };

// function f1(user1) {
//   console.log(user.id, user.name);
// }

// function f1_1({id,name}){
//   console.log(id,name);
// }

// const f1_2
// // f1(hong);
// // F2;
// // 1, "Hong";
// // console.log(id, name);

// var f2 = function (x, y) {};
// const f3 = (x, y) => {};

// const f3_1 = (user) => `id=${user.id}, name=${user.name}`;
// const f3_2 = (user) => console.log(id, name);
// const f3_3 = ({ id, name }) => console.log(id, name);

/////////////////////////////////////////////////////////////

// 3. p66
//다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
console.log('== 3. passwd 프로퍼티 제외한 데이터를 userInfo에 할당 ==');

const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };

function p66_me() {
  const { passwd, ...rest } = user;
  const userInfo = rest;

  console.log('🚀 ~ userInfo:', userInfo);
}

function p66_prof() {
  const { passwd, ...userInfo } = user;
  console.log('🚀 ~ userInfo:', userInfo);
}

p66_me();
p66_prof();

// 4. p67
//다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.

function p67_me() {
  console.log('== 4. 3개의 id를 id1, id2, id3로 할당하기 ==');
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  const id1 = arr[0][0].id;
  const id2 = arr[1][0].id;
  const id3 = arr[1][1].id;
  console.log('id1: ', id1, ', id2: ', id2, ', id3: ', id3);
}

function p67_prof() {
  console.log('== 4. 3개의 id를 id1, id2, id3로 할당하기 ==');
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  console.log('id1: ', id1, ', id2: ', id2, ', id3: ', id3);
}

p67_me();
p67_prof();

// 5.
// 0.1 + 0.2 를 소숫점 둘째자리까지만 출력
console.log('== 5. 0.1 + 0.2 를 소숫점 둘째자리까지만 출력하기 ==');

//console.log(Number(0.1 + 0.2).toString(2));
console.log((0.1 + 0.2).toFixed(2));

// p113
//[['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)
//hint. const [k, …v] ⇒ {k: v}
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

const arr113_1 = [
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
];

//위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)
//hint. [k, …obj[k]]
// => [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
console.log('==== 위에서 만든 객체를 다시 배열로 만들기 ====');
const objarr1 = makeObjectFromArray([
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
]);
console.log(objarr1);

function makeObjectFromArray(obj) {}
const arr113_2 = { A: [10, 20], B: [30, 40], C: [50, 60, 70] };

// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.
// const newKim = {...kim};
// hint. const newObj = {};

const kim = { nid: 3, nm: 'Hong', addr: 'Pusan' };

function copyObject(obj) {
  // return {...o}
  const ret = {};
  for (const k in obj) {
    ret[k] = obj[k];
  }
  return ret;
}

const newKim = copyObject(kim); // shallow copy
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr); // true면 통과!

for (const k in obj) newObj[k] = obj[k];
