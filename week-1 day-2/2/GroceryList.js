import React from 'react';

const GroceryList = (props) => {
  const { groceries } = props;

  return (
    <div>
      <h2>Grocery List</h2>
      <ul>
        {groceries.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
