// 1.
//오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
{
  console.log('== 1. 오늘 날짜의 요일 출력하기 ==');

  const WEEK_NAMES = '일월화수목금토';
  const dt = new Date();
  const todayName = WEEK_NAMES[dt.getDay()];
  console.log(`오늘은 ${todayName}요일 입니다.`);
  // console.log("🚀 ~ dt:", dt, dt.getDay());
}

// 2. 못끝냄
//user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오. (function signature를 3개 이상으로 표현하기)

{
  console.log('== 2. id와 name을 출력하는 3개의 함수 작성하기 ==');

  const hong = { id: 1, name: 'Hong' };
  const lee = { id: 2, name: 'Lee' };
  function f1() {
    const x = hong;
    const y = lee;

    console.log(y);
  }

  console.log('f1 = ', f1(hong));

  // f1(hong);
  // F2;
  // 1, "Hong";
  // console.log(id, name);

  var f2 = function (x, y) {};
  const f3 = (x, y) => {};

  const f3_1 = (user) => `id=${user.id}, name=${user.name}`;
  const f3_2 = (user) => console.log(id, name);
  const f3_3 = ({ id, name }) => console.log(id, name);
}

// 3.
//다음 user 객체에서 passwd 프로퍼티를 제외한 데이터를 userInfo 라는 변수에 할당하시오.
console.log('== 3. passwd 프로퍼티 제외한 데이터를 userInfo에 할당 ==');

const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };

const { passwd, ...rest } = user;
const userInfo = rest;

console.log('🚀 ~ userInfo:', userInfo);

// 4.
//다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.
console.log('== 4. 3개의 id를 id1, id2, id3로 할당하기 ==');
const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const id1 = arr[0][0].id;
const id2 = arr[1][0].id;
const id3 = arr[1][1].id;
console.log(id1, id2, id3);

// 5.
// 0.1 + 0.2 를 소숫점 둘째자리까지만 출력
console.log('== 5. 0.1 + 0.2 를 소숫점 둘째자리까지만 출력하기 ==');

console.log(Number(0.1 + 0.2).toString(10));

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

const arr113_2 = { A: [10, 20], B: [30, 40], C: [50, 60, 70] };

// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.
// const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
// const newKim = {...kim};
// hint. const newObj = {};
const newKim = copyObject(kim); // shallow copy
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr); // true면 통과!

for (const k in obj) newObj[k] = obj[k];
