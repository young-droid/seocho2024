// var moment = require('moment'); // CJS 방식

import moment from 'moment';
// import { Cat } from './oop.js';
import Cat, { Pig } from './oop.js';

const locale_ko = 'ko';

moment.locale(locale_ko);

const d = new Date();

console.log('🚀 ~ d:', d.toLocaleString());

const m = moment();

console.log('🚀 ~ m:', m.format('YYYY-MM-DD (ddd) hh:mm:ss'));

const writtenDate = moment();
console.log('🚀 ~ writtenDate:', writtenDate.fromNow());

const nabi = new Cat('Nabi');
const peggy = new Pig('Peggy');
