console.log("-----클로저 예시 1");

function discount() {
  // cf. currying
  const dcRate = 0.1; // private variable
  return function (price) {
    // 내부함수(:외부에서 dcRate 참조 가능하도록하는 함수를 반환)
    return price * dcRate; // dcRate를 외부에서 직접 접근 못하지만 이 함수는 가능
  }; // 즉, 외부에서 현재 할인율을 알 수는 없음!
}

const items = [
  { item: "상품 A", price: 32000 },
  { item: "상품 B", price: 45000 },
];
const dc = discount();
for (const { item, price: orgPrice } of items) {
  const salePrice = orgPrice - dc(orgPrice); // 실제 판매 금액
  console.log(`${item}: ${orgPrice}원 --> ${salePrice.toLocaleString()}원`);
}

console.log("-----클로저 예시 2");

function currentCount() {
  let currCount = 0; // private variable
  return {
    connect() {
      currCount += 1;
    },
    disconnect() {
      currCount -= 1;
    },
    getCount() {
      return currCount;
    }, // getter method
    get count() {
      return currCount;
    }, // readonly getter (accessor)
  };
}

const actions = ["입장", "입장", "입장", "퇴장", "입장", "퇴장"];

const counter = currentCount();
for (const action of actions) {
  action === "입장" ? counter.connect() : counter.disconnect();
  console.log(`${action} -> 현재 입장객:  ${counter.count} 명`);
}
console.log("Current User Count=", counter.count); // counter.getCount()

const user = { id: 1, name: "Hong" };
const u1 = Object.assign({}, user);
console.log("🚀 ~ u1:", u1);
const u2 = { ...user };
const u3 = new Object(user);
const u4 = Object.create(user);
console.log("u1=", u1, user === u1);
console.log("u2=", u2, user === u2);
console.log("u3=", u3, user === u3); // true!!
console.log("u4=", u4, user === u4);
console.log("u4.proto=", Object.getPrototypeOf(u4));
