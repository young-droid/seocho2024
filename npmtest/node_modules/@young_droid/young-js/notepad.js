user5 = { id: 1, name: 'Hong' };
x5 = { ...user5 };
console.log(x5);

const fn = ({ age }) => age; // user = {id: 1, name: 'P', age: 33}
// ⇐⇒ function fn({age }) { return age; }
const { age2: age3 = fn(user) } = { age22: 20 }; // age2 = 20, age3 = 33

function f() {
  let count = 10;
  return {
    count,
  };
}

const x = f();
console.log('🚀 ~ x:', x);
console.log('🚀 ~ x.count:', x.count);
