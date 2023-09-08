import React, { useState } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState("eldrin");
  const [age, setAge] = useState("20");
  const [isMarried, setIsMarried] = useState(true);

  const [person, setPerson] = useState({
    name: "alex",
    designation: "developer",
  })

  const [arr, setArr] = useState([90, 77, 37, 100]);

  // Define a new state variable for the array of objects
  const [emp, setEmp] = useState([
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

  // Create a new array of objects with the desired values
  const updatedEmp = [...emp];

  // Update the second index (index 1) of the array with the new value
  updatedEmp[1] = {
    id: 2,
    salary: 999999, // Replace with the new value 
  };

  const empList = updatedEmp.map((e) => {
    return <p key={e.id}>Salary: {e.salary}</p>
  });

  return (
    <div>
      <p>FirstName: {firstName}</p>
      <p>Age: {age}</p>
      <p>{person.name}</p>
      <p>{person.designation}</p>
      <p>{arr.map((e) => <p>{e}</p>)}</p>
      <p>{empList}</p>
    </div>
  );
};

export default App;
