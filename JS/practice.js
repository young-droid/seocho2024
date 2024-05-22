//오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고, switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
const WEEK_NAMES = "일월화수목금토";
const dt = new Date();
const todayName = WEEK_NAMES[dt.getDay()];
console.log(`오늘은 ${todayName}요일 입니다.`);
// console.log("🚀 ~ dt:", dt, dt.getDay());
