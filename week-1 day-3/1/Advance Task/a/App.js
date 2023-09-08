const _ = require('lodash');

const arrOne = [{
    id: 20,
    name: 'alex'
}, {
    id: 30,
    name: 'alina'
}];

const arrTwo = [{
    id: 40,
    name: 'hello'
}, {
    id: 30,
    name: 'world'
}];

const comparator = (obj1, obj2) => obj1.id === obj2.id;

const result = _.xorWith(arrOne, arrTwo, comparator);

console.log(result);
