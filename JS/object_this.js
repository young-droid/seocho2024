// 'use strict';

globalThis.name = 'GLOBAL';
this.name = 'MODULE';

let obj = {
  // {} 안의 내용들은 HEAP 에 저장
  name: 'OBJ',
  f1: function () {
    // 함수 선언문 / function () {} 모두 <F.O>
    console.log('f1 = ', this.name); // 지금은 프로퍼티로 존재하기 때문에 나 자신 this
  },
  f2: () => {
    // 화살표 함수 / <a. f. o>
    console.log('f2 = ', this.name); // BAD. 프로퍼티인 화살표 함수 내 this 는 모듈을 가르킨다. 오해의 소지가 있기 때문에 사용하지 않는걸 추천
  },
  f3() {
    // 메소드 함수 / <f3.f.o> (__proto__) 프로토 타입은 항상 나 자신 this
    console.log('f3 = ', this.name);
  },
};

obj.f1(); //
obj.f2(); // 화살표 함수의 this는 부모(상위)에 있는 this
obj.f3();
const nm = obj.name;
console.log('-----------------', nm);
const f11 = obj.f1; //여기서 f11는
const f22 = obj.f2;
// const f33 = obj.f3;
f11();
f22();
// f33();

class Dog {
  f1() {
    console.log('Dog.f1', this.name);
  }
}
//Dog.f1() <- 메소드 함수는 프로토타입으로 들어가기 때문에 바로 불러올 수 없다. (obj는 모종의 이유로 접근가능하게 해줌)
Dog.prototype.f1();

function f9() {
  console.log(f9.name);
}
f9(); // 함수 f9 실행
// 출력값 : f9
