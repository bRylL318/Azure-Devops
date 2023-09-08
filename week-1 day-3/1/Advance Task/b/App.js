const _ = require('lodash');

const str = ['u', 'ec'];
const arr = [{
    storageVal: 'u',
    table: ['E', 'F']
}, {
    storageVal: 'data',
    table: ['E', 'F']
}, {
    storageVal: 'ec',
    table: ['E']
}];

const filteredTables = _.map(
  _.filter(arr, item => str.includes(item.storageVal)),
  'table'
);

console.log(filteredTables);
