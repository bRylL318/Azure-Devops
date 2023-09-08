import React from 'react';
import _ from 'lodash';

const str = ['u', 'ec'];
const arr = [
  {
    storageVal: 'u',
    table: ['E', 'F'],
  },
  {
    storageVal: 'data',
    table: ['E', 'F'],
  },
  {
    storageVal: 'ec',
    table: ['E'],
  },
];

const App = () => {
  
  const tableArrays = _.map(_.filter(arr, (obj) => str.includes(obj.storageVal)), 'table');

  const result = _.flatten(tableArrays);

  return (
    <div>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
};

export default App;
