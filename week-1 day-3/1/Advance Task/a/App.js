import React from 'react';
import _ from 'lodash';

const arrOne = [
  {
    id: 20,
    name: 'alex'
  },
  {
    id: 30,
    name: 'alina'
  }
];

const arrTwo = [
  {
    id: 40,
    name: 'hello'
  },
  {
    id: 30,
    name: 'world'
  }
];

const comparator = (obj1, obj2) => obj1.id === obj2.id;

const result = _.xorWith(arrOne, arrTwo, comparator);

function App() {
  return (
    <div>
      <h1>Result:</h1>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default App;
