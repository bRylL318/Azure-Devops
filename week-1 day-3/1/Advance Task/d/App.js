import React from 'react';
import _ from 'lodash';

const MyComponent = () => {
    const inputArray = ['E', 'F'];
    const nestedArray = [['F'], ['G']];

    // Flatten the nested array and concatenate it with the input array
    const resultArray = _.concat(inputArray, _.flatten(nestedArray));

    return (
        <div>

            <p>{JSON.stringify(resultArray, null, 2)}</p>
        </div>
    );
};

export default MyComponent;
