////////// p130
// 함수를 한번만 실행하게 하는 once 함수를 작성하시오.

/*
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // expected result => undefined
console.log(fn(3, 8)); // expected result => undefined
*/

////////// p.131
// 다음 코드를 올바르게 수정하시오.

/*
const dog = {
  name: 'Max',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName, 1000);
  },
};

dog.whatsYourName();
*/

//////////p. 132
// 어떤 함수를 호출하기 전에 before() 함수를, 호출 후에 after() 함수를 항상 실행하는 template() 함수를 만드시오.
//hint. someFn에 대한 클로저 함수를 만들어라

/*
const before = () => console.log('before....');
const after = () => console.log('after...');

const someFn = () => console.log('do something...1');

const template = // 코드를 완성하세요.

const temp = template(someFn);

temp();
*/

//////////p. 133

//////////p. 134
// getNextWeek 함수는 widx변수에 부수 효과(side effect)가 있다.
// 이를 부수 효과가 없도록 변경하시오.  (hint: closure, IIFE)

/*
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1;
const getNextWeek = () => {
  widx += 1; // side-effect!
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect! (이 것을 못 하도록!)
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
*/

/*
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1;
const getNextWeek = () => {
  widx += 1;
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
};

let cnt = 0;
const intl = setInterval(() => {
  //   widx += 2;
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
*/

const weeks = ['일', '월', '화', '수', '목', '금', '토'];

// const getNextWeekClosure = () => {
const getNextWeek = (() => {
  let widx = 0;
  return function () {
    // if (widx >= weeks.length) widx = 0;
    return `${weeks[widx++ % 7]}요일`;
  };
})();
// const getNextWeek = getNextWeekClosure();

let cnt = 0;
const intl = setInterval(() => {
  //   widx += 2;
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 12) clearInterval(intl);
}, 200);
