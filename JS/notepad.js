user5 = { id: 1, name: 'Hong' };
x5 = { ...user5 };
console.log(x5);

function f() {
  let count = 10;
  return {
    count,
  };
}

const x = f();
console.log('🚀 ~ x:', x);
console.log('🚀 ~ x.count:', x.count);
