// let a = 1, b = 2;       // 쉼표는 자제하기. 최대한 아래처럼 작성하기
let a = 1; // let은 선언해두고도 밑에 변수가 달라질 수 있으니,
let b = 2; // const가 마음 편하다. 아래처럼
// const c = 1;          // 이렇게 해두면 밑에서 연산 되어도 c는 그대로 1로 남아있다.
// const c = (a++, b++);
let c = (a++, b++);
// let c = ((a = a + 1), (b = b + 1));
console.log("c = ", c, a, b);

let d = (a--, b + a);
console.log("d = ", d, a, b);

d = void (c = a + b);
console.log(a, b, c, d);

console.log("----------------");

const first = "";
const last = "Bob";
if (first) {
  console.log(first);
}
console.log(last);

const _name = "fullName = ";
let fullName = first ? first + " " : "";
fullName = fullName + last;
console.log(_name + fullName);

console.log(`${_name}${first}${first ? " " : ""}${last}`);

let t = 1;
let s = t++;
console.log(s);
console.log(t, t++);

let q = (1, 2, 3);
console.log(q);

console.log("----------------");

const bi = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log(bi, oct, hex);
console.log(parseInt("101", 36));
console.log(parseFloat("10.100"));
console.log(Number("10.100"));

console.log(-Infinity);
console.log(isNaN(Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);

console.log("----------------");

const num = 123.456;
console.log(num);
console.log(num.toFixed(2));
console.log(num.toFixed(2) + 9);
console.log((Number(num.toFixed(2)) + 9).toFixed(2));
console.log(Number(num.toFixed(2)) + 9);
console.log(Math.trunc(Number(num.toFixed(2)) + 9));

const res = 0.1 + 0.2;
console.log((0.1 + 0.2).toFixed(1));

console.log(Math.trunc((0.1 + 0.2) * 10) / 10);
console.log(0.1 + 0.2) * 10;

// let i = (false === !!0)

// user = {id: 1, name: 'Hong'}
// JSON.stringify(user)
// JSON.stringify(user, null, ' ')
// console.log(JSON.stringify(user, null, ' '))
// arr = [1,2]
// console.log(JSON.stringify(arr, null, ' '))

// console.log(user.name)
// console.log(user['name'])

const three = 0.1 + 0.2;
console.log(three);
if (three === 0.3) {
  console.log("ok");
} else {
  console.log("exists garbage!");
}

const x = 2;

//1. if 문:
// if (x === 1) {
//     console.log('one');
// } else if (x === 2) {
//     console.log('two');
// } else if (x === 3) {
//     console.log('three');
// } else {
//     console.log('etc');
// }
let outStr = "etc";
if (x === 1) {
  outStr = "one";
} else if (x === 2) {
  outStr = "two";
} else if (x === 3) {
  outStr = "three";
}
console.log(outStr);

//2. switch 문:
switch (x) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  default:
    console.log("etc");
}

//3. 3항 연산자:
outStr = x === 1 ? "one" : x === 2 ? "two" : x === 3 ? "three" : "etc";
console.log(outStr);

let i = 5;
while (i > 0) {
  console.log("🚀 ~ i:", i);
  i = i - 1;
}

i = 5;
while (i-- > 1) console.log("🚀 ~ i:", i);

console.log("-----------------");
i = 5;
do console.log("🚀 ~ i:", i);
while (i-- > 1);

console.log("---------------");

//1부터 100까지 출력하기 / 더하기 = 5050
//1. while
// //출력
// i = 0;
// while (++i <= 100) {
//   console.log(i);
// }

//더하기
i = 0;
let sum = 0;
while (i < 100) {
  i = ++i;
  sum = sum + i;
}
console.log("🚀 ~ i:", i);
console.log("🚀 ~ sum:", sum);

//2. for
// for (let j = 1; j <= 5; j++) {
for (let j = 1; j <= 5; j = j + 1) {
  console.log("🚀 ~ j:", j);
}

// for (let j = 5; j > 0; j--) {
for (let j = 5; j > 0; j = j - 1) {
  console.log("🚀 ~ j:", j);
}

console.log("-------");
// // for 으로 100까지 출력
// for (let j = 1; j <= 100; j = j + 1) {
//   console.log("🚀 ~ j:", j);
// }

console.log("-------");
//for 으로 100까지 더하기
sum = 0;
for (let j = 1; j <= 100; j = j + 1) {
  //   sum = sum + j;
  sum += j;
}
console.log("🚀 ~ sum:", sum);

console.log("-------");
//배열 출력하기
const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr?.length; i++) {
  console.log(`🚀 ~ arr[${i}]`, arr[i]);
}

console.log("------");
//for 문의 of 사용
//arr 를
console.log(arr);
for (const t of arr) {
  console.log("🚀 ~ t:", t);
}

for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}
const user = { id: 1, name: "hong" };
for (const p in user) {
  console.log("🚀 ~ p:", p, user[p]);
}
const cart = {
  user: user,
  items: [
    { id: 100, itemName: "신라면" },
    // {id: 200, itemName: '너구리'}
    // {id: 300, itemName: '삼양라면'}
  ],
};
console.log("cartOwner=", cart.user.name);
for (const cc in cart) {
  if (cc === "user") {
    for (const p in user) {
      console.log("🚀 ~ p:", p, user[p]);
    }
  } else if (cc === "items") {
    for (const item of cart[cc]) {
      console.log(item.itemName);
    }
  }
}

const WEEK_NAMES = "일월화수목금토";
for (const w of WEEK_NAMES) {
  console.log("🚀 ~ w:", w);
}

//break, continue
const arr2 = [1, 2, 3, 4, 5];
for (const t of arr2) {
  console.log("🚀 ~ t:", t);
  if (t > 2) break;
}

for (const t of arr2) {
  if (t % 2 === 0) continue;
  console.log("🚀 ~ t:", t);
}

console.log("====================");

const 국어 = 80;
const 수학 = 50;

const score_60 = "60점짜리 코드";
function checkScore60() {
  if (국어 > 70) {
    return "합격";
  } else if (수학 > 70) {
    return "통과";
  } else {
    return "불합격";
  }
}

console.log(score_60 + checkScore60());

//더 좋은 코드
function checkScore() {
  if (국어 > 70) {
    return "합격";
  }

  if (수학 > 70) {
    return "통과";
  }
  return "불합격";
}

console.log(checkScore());

console.log("+++++++++++");
