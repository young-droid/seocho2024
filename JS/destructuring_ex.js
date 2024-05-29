//65
//user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.

console.log('==== p65 객체를 받아 id 와 name을 출력하는 함수 3개 작성 ====');

const hong = { id: 1, name: 'Hong' };
const lee = { id: 2, name: 'Lee' };

//SY's
function sy({ id, name }) {
  console.log(`id = ${id} name = ${name}`);
}

sy(hong);
sy(lee);

//1.
function fn1(x) {
  const { id, name } = x;
  console.log(id, name);
}
//2.
var fn2 = function (x, y) {};

//3.
const f3 = (x, y) => {};

fn1(hong);
// fn2();
// fn3();

// p66

console.log('==== p66 객체 속 passwd 제외한 나머지 출력 ====');

function p66_me() {
  const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };

  const { passwd, ...rest } = user;
  const userInfo = rest;
  console.log('🚀 ~ rest = userInfo:', userInfo);
}

function p66() {
  const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };
  const { passwd, ...userInfo } = user;
  console.log('🚀 ~ userInfo:', userInfo);
}

p66_me();
p66();

//////////p67
//다음 arr에서 3개의 id를 id1, id2, id3로 할당하시오.

console.log('==== p67 arr 속 값을 각 변수에 할당 ====');

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

function ArrIndex() {
  const id1 = arr[0][0].id;
  const id2 = arr[1][0].id;
  const id3 = arr[1][1].id;
  console.log('ArrIndex : ', id1, id2, id3);
}

function ValueOnKey() {
  const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  console.log('ValueOnKey : ', id1, id2, id3);
}

ArrIndex();
ValueOnKey();
// 출력결과: 1 2 3
