import React, { useState } from 'react';

const App = () => {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      salary: 909090,
    },
    {
      id: 2,
      salary: 808080,
    },
    {
      id: 3,
      salary: 707070,
    },
  ]);

  const updateSecondIndex = () => {

    const newArray = [...employees];
    
    newArray[1] = {
      id: 2,
      salary: 999999, 
    };
    
    setEmployees(newArray);
  };

  const empList = employees.map((e) => {
    return <p key={e.id}>Salary: {e.salary}</p>;
  });

  return (
    <div>
      <p>Employee List:</p>
      {empList}
      <button onClick={updateSecondIndex}>Update Second Index</button>
    </div>
  );
};
