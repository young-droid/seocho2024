const [a, b, c = 3] = [1, 2];
// -> const [a, b] = [1, 2];
//    const c = 3
// 위의 코드를 하나로 합친 것

console.log("🚀 ~ object destructuring");
const user = { id: 1, name: "Hong", addr: { city: "Seoul", road: "강남대로" } };
const { id: id } = user;
const { id: userId, name: userName } = user;
console.log(userId);
