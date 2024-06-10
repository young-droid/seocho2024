//추가 연습문제
////////////////////////////////////////////////////
const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const park = { id: 3, name: 'Park' };
const choi = { id: 4, name: 'Choi' };

const users = [park, kim, hong, choi];

// function userSort() {
//   return users.toSorted((a, b) => a.id - b.id);
// }

// const beforeLastSorted = userSort(users).at(-2);
const beforeLastSorted = users.toSorted((a, b) => a.id - b.id).at(-2);
console.log('🚀 ~ beforeLastSorted:', beforeLastSorted);

////////////////////////////////////////////////////////////////////

// p145
//다음을 수행하시오.

let arr2;

// ex1) [2,3]을 추출
arr2 = [1, 2, 3, 4, 5];
const ex1 = arr2.splice(1, 2);
console.log('🚀 ~ ex1:', ex1);

// ex2) [3]부터 모두 다 추출
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ex2 = arr2.splice(2);
console.log('🚀 ~ ex2:', ex2);

// ex3) [2,3,4] 제거하기
arr2 = [1, 2, 3, 4, 5];
const ex3 = arr2.slice;

// ex4) 복원하기

// ex5) [3] 부터 끝까지 제거하기
arr2 = [1, 2, 3, 4, 5];

// ex6) 복원하기
arr2 = [1, 2, 3, 4, 5];

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
arr2 = [1, 2, 3, 4, 5];

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.

// p147
// 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오. (단, 입력값은 다음 예시로 한정함)
// hint. function push (a, ...b) // rest 함수 사용~

// p148
// 다음과 같은 deleteArray와 deleteObjectArray를 순수 함수로 작성하시오.
