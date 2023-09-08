import React, { useState } from 'react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Step 1

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
      salary: 807070,
    },
  ]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmp = emp.filter((e) => {

    return e.salary.toString().includes(searchQuery);
  });

  const empList = filteredEmp.map((e) => {
    return <p key={e.id}>Salary: {e.salary}</p>;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Salary"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {empList}
    </div>
  );
};

export default App;
