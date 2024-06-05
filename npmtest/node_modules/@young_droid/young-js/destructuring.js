const [a, b, c = 3] = [1, 2];
// -> const [a, b] = [1, 2];
//    const c = 3
// 위의 코드를 하나로 합친 것

console.log("🚀 ~ object destructuring");
const user = { id: 1, name: "Hong", addr: { city: "Seoul", road: "강남대로" } };
const { id: id } = user;
const { id: userId, name: userName } = user;
console.log(userId);

const { name: n, age = 30 } = { name: "Lee" }; // n = ?, age = ?
const { age2 = 30 } = { name: "Park", age2: 20 }; // age2 = 20
const fn = ({ age }) => age; // user = {id: 1, name: 'P', age: 33}
// ⇐⇒ function fn({age }) { return age; }
const { age2: age3 = fn(user) } = { age22: 20 }; // age2 = 20, age3 = 33
const u3 = { id: 3, name: "kim", addr: { id: 1, city: "Seoul" } };
let {
  id: idd,
  addr: { id: aid },
} = u3; // idd=3, aid=?
const arr = [1, 2, [3, 4], [5, 6], { ax: 7, ay: 8 }, { ax: 9 }];
const [, x, [, y], z] = arr; // x = ?, y = ?, z = ?
const { 1: p, 4: q } = arr; //  p = ?, q = ?  ⇐ const [, p, , , q] = arr;
const [, , , , { ay: a1 }, { ax: a2 }] = arr; // a1 = ?, a2 = ?
const [k, v] = Object.entries(user);
// const [k, v] = [ [ 'id', 1 ], [ 'name', 'P' ], [ 'age', 33 ] ]

const obj = {
  id: 1,
  fn1: function () {
    console.log(arguemtns);
  },
};

const { fn1 } = obj;
fn1(1, 2, 3);
