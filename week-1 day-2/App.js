import React, { useState } from 'react';

const employeeData = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://example.com/your-image.jpg',
    designation: 'Software Engineer',
    details: 'John is a talented software engineer with expertise in web development.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_female-512.png',
    designation: 'UI Designer',
    details: 'Jane is a creative UI designer with a passion for user-friendly interfaces.',
  },
];

const App = () => {
  const [hoveredEmployee, setHoveredEmployee] = useState(null);

  const handleMouseOver = (employee) => {
    setHoveredEmployee(employee);
  };

  const handleMouseOut = () => {
    setHoveredEmployee(null);
  };

  return (
    <div>
      <h1>Employee List</h1>
      <ul>
        {employeeData.map((employee) => (
          <li
            key={employee.id}
            onMouseOver={() => handleMouseOver(employee)}
            onMouseOut={handleMouseOut}
          >
            {employee.name} - {employee.designation}
          </li>
        ))}
      </ul>
      {hoveredEmployee && (
        <div>
          <h2>Employee Details</h2>
          <p>Name: {hoveredEmployee.name}</p>
          <p>Image: {hoveredEmployee.image}</p>
          <p>Designation: {hoveredEmployee.designation}</p>
          <p>Details: {hoveredEmployee.details}</p>
        </div>
      )}
    </div>
  );
};

export default App;
