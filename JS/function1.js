function hello() {
  return "Hello World";
}
console.log(hello());

function Dog(name) {
  console.log(this);
  this.name = name;
}
Dog("max");
console.log(this);
console.log(globalThis.name);

const lucy = new Dog("Lucy");
console.log("🚀 ~ Lucy:", lucy);
console.log("🚀 ~ Lucy:", lucy.name);

function printFnReturnValue(fn) {
  console.log(arguments);
}

console.log("======================");
const f1 = function ff(x, isLast) {
  console.log("x = ", x);
  if (isLast) return;
  else ff("efg", true);
};

// console.log("======================");
// const f1 = function (x, isLast) {
//   console.log("x = ", x);
//   if (isLast) return;
//   else f1("efg", true);
// };

f1(1); // OK

function hi() {
  console.log("Hi!", name);
}

hi.call("Hong");

// const f = function () { return x+1}

const f = (x) => {
  return x + 1;
};

console.log("🚀 ~ f ~ x:", x);
