console.log('@young-droid/young-js');

export const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

const LOCALE_MAPPER = {
  korea: 'ko',
  japan: 'ja',
  english: 'us',
};

export function fromNow(dt, locale = 'ko') {
  moment.locale(LOCALE_MAPPER[locale.toLocaleLowerCase()]);
  return moment(dt).fromNow();
}

Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};

// console.log([1, 2, 3].first());
// console.log([1, 2, 3].last());

console.log('***>> ', fromNow(new Date()));
console.log('***>> ', fromNow(new Date()), 'KOREA');
