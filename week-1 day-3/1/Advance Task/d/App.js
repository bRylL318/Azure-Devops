const _ = require('lodash');

const t = ['E', 'F'];
const nestedArrays = [['F'], ['G']];

const result = _.concat(t, _.flatMap(nestedArrays));

console.log(result);
