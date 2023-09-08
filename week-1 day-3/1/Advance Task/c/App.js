import React from 'react';
import _ from 'lodash';

function MyComponent() {
    const a = [['E'], ['F']];
    const flattenedArray = _.flatten(a);

    return (
        <div>
            <p>Flattened Array:</p>
            <p>
                {flattenedArray.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </p>
        </div>
    );
}

export default MyComponent;
