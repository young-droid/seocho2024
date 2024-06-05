{
  {
    function varFn() {
      var v = 1;
      {
        var v = 2,
          vv = 3;
        console.log(v, vv, xx); // 2, 3
      }
      console.log(v, vv); // 2, 3
    } // v는 하나의 공간 (stack)

    xx = 9;
    varFn();
  }

  function varFn() {
    var v = 1;
    {
      var v = 2,
        vv = 3;
      console.log(v, vv, xx);
    }
    console.log(v, vv);
  }

  xx = 9;
  varFn();
}

console.log("-----------");

{
  var gg = 1;
  let bb = 2;
  function f1(x, y) {
    var gg = 11;
    let bb = 22;
    console.log("f1>", gg, bb, zz, f2, f2.length); // 3
    f2("first"); // t,u,v 실행 (이 시점에 nested f2는 hoisting됐지만 <f.o>로 정의되지 않은 상태!) ← inner2
    {
      const xx = 99; // f1 평가 시 xx는 notInitializedYet(uninitialized) 상태로 block상단에 hoisting.
      f2("nest-first"); // no error? which call f2(inner) or f2(nested) ?
      var zz = 88; // f1 평가 시 f1 상단에 undefined로 hoisting.
      function f2(t) {
        console.log(t, "nested", xx, zz); //console.log(t, "nested", xx, zz, lll); <-Error. ? ReferenceError: Cannot access 'lll' before initialization
      } // hoisting은 undefined로?!
      let lll = 0; // hoisting되는 이유는 뒤에서 선언했는지 여부를 개발자에게 알려줘야 중복 선언 안함!
    } // 평가시점에 f1 scope로 hoisting.
    function f2(t, u) {
      console.log(t, "inner", xx, zz);
    } // f1 평가 시 f1 상단에 <f.o>로 hoisting
    function f2(t, u, v) {
      console.log(t, "inner2", xx, zz);
    } // hoisting 시, 위 라인의 f2를 덮어씀!
    var zz = 800;
    f2("second"); // call 'nested'(파랑) & f2는 block을 closure!
  }
  function f2(g) {
    console.log(g, "global f2>", gg, bb, xx, kk); // ?
  }
  let xx = 9;
  if (gg > 0) {
    var kk = 33;
    const yy = 9;
  }
  f1(1, 2);
  console.log(kk); // console.log(kk, yy); <-Error. ? yy is not defined in global scope
  f2("third"); // global f2 실행
}

console.log("-----closure practice-----");

let user;
{
  const privateUser = { id: 1, name: "Hong" };
  user = privateUser; // 이 user 변수가 하위(Block) 스코프의 privateUser를 참조
}
// block은 끝나서 이 block의 BlockExecutionContext는 ECS에서 사라졌지만,
// privateUser를 user가 계속 참조하고 있어 BlockLexicalEnvironment(DecEnvRec)는 사라질 수 없다!!

user.age = 30; // user refer to privateUser ⇒ 실제로 privateUser가 변경!
console.log(user); // { id: 1, name: 'Hong', age: 30 }
//-> 여기에서 user를 클로저 라고 부른다

console.log("-----순수 함수, 비순수 함수-----");
console.log("순수함수: 고수");

{
  function counter() {
    let count = 0;
    return function X() {
      count += 1;
      return count;
    };
  }
  const counter1 = counter();
  const counter2 = counter();
  console.log(counter1()); // 1
  console.log(counter1()); // 2
  console.log(counter2()); // 1
  console.log(counter2()); // 2
}
// 같은 인풋에 값이 달라지지만, let count 의 변형이 함수 외부에서 일어나지 않기 때문에 (side effect 가 없음) 이것은 순수함수. 고수!

console.log("비순수함수: 하수");

{
  let count = 0; // 외부변수(오염우려)
  function counter() {
    count += 1;
    return count;
  }
  // 하나의 counter만 사용 가능
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3
}
// 같은 인풋에 값이 계속 달라진다. 여기서 let count 는 함수 바깥에 있으며 변형이 일어나고 있기 때문에 (side effect 존재중) 이것은 비순수함수. 하수!
