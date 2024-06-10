const obj = {
  values: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    //이터레이터를 만드려면 꼭 이 함수 사용 필요
    const self = this;
    return {
      currIdx: -1,
      next() {
        this.currIdx += 1;
        return {
          value: self.values[this.currIdx],
          done: self.currIdx >= self.values.length,
        };
      },
    };
  },
  iterator() {
    return this[Symbol.iterator]();
  },
};
console.log('🚀 ~ obj:', obj.values);

const it = obj.iterator();
console.log('🚀 ~ obj.iterator:', it);
console.log('🚀 ~ next:', it.next());
console.log('🚀 ~ next:', it.next());
console.log('🚀 ~ next:', it.next());
console.log('🚀 ~ next:', it.next());
console.log('🚀 ~ next:', it.next());

console.log('========================');

function* route() {
  const start = yield '출발 역은?'; // yield가 있으므로 caller에게 제어권 넘김. yield뒤는 그냥 메시지!
  const end = yield '도착 역은?';
  return `${start}역에서 출발하여 ${end}역에 도착합니다.`;
}

const caller = route(); // next() 함수가 있는것으로 볼 때, "내 안에 이터레이터 있다!"
console.log('🚀 ~ caller:', caller.next());
// undefined보내면 제너레이터는 {value: '출발 역은?', done: false}를 caller에게 보내(반환하)고 일시 정지.
console.log('🚀 ~ 출발역:', caller.next('문래')); // start에 '문래'를 주입하고, {value: '도착 역은?', done: false}를 caller에게 보내고 일시 정지.
console.log('🚀 ~ 도착역:', caller.next('신림'));
// end에 신림 주입하고, {value: '문래역에서 출발하여 신림역에 도착합니다.', done: true} 반환과 동시에 멈춤!

const arr = [1, 2, 1, 2, 3, 5];
const s3 = new Set(arr);
const ret = [...s3];
console.log('🚀 ~ s3:', s3);
console.log('🚀 ~ ret:', ret);

console.log('정답>>', [...new Set(arr)]);
