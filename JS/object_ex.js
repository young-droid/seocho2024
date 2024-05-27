console.log("-----------------------------------------");

// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.
// 2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)
{
  const arr = [100, 200, 300, 400, 500, 600, 700];

  console.log("\n1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오.");

  for (const i in arr) console.log(i);

  console.log("\n2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)");

  for (const i in arr) console.log(arr[i]);
}

// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.
// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.
//  // Object.defineProperty
// 7. role 프로퍼티는 읽기전용으로 설정하시오. // Object.defineProperty
{
  const obj = {
    name: "lim",
    addr: "Yongsan",
    level: 1,
    role: 9,
    receive: false,
  };

  console.log("\n3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.");

  for (const i in obj) console.log(i);

  console.log("\n4. for-in문을 사용하여 프로퍼티 값을 출력하시오.");

  for (const i in obj) console.log(obj[i]);

  console.log("\n5. for-of문을 사용하여 프로퍼티 값을 출력하시오.");

  for (const i of Object.values(obj)) console.log(i);

  console.log("\n6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.");

  Object.defineProperty(obj, "level", { enumerable: false });
  console.log(Object.entries(obj));

  console.log("\n7. role 프로퍼티는 읽기전용으로 설정하시오.");
}

// [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오. (makeObjectFromArray)
//hint -> of 로 받아서 destructuring 으로 쪼개고
{
  function makeObjectFromArray(arr) {}

  const obj1 = makeObjectFromArray([
    [
      ["A", 10, 20],
      ["B", 30, 40],
      ["C", 50, 60, 70],
    ],
  ]);
  // => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
}

//위에서 만든 객체를 다시 배열로 만드시오. (makeArrayFromObject)
//hint -> ... 쓰기

// 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.
const kim = { nid: 3, nm: "Hong", addr: "Pusan" };
// 이거 쓰지 말라는 뜻 -> const newKim = {...kim};
function copyObect() {}
const newKim = copyObject(kim); // shallow copy
newKim.addr = "Daegu";
console.log(kim.addr !== newKim.addr); // true면 통과!

//hint. const newObj = {};
//      for (const k in obj)
//	        newObj[k] = obj[k];
