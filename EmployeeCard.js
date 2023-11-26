import React from 'react';

const EmployeeCard = ({ employee }) => (
  <div className="employee-card">
    <img src={employee.picture} alt={employee.name} />
    <div>
      <h2>{employee.name}</h2>
      <p>{employee.place}</p>
      <p>{employee.age} years old</p>
      <p>{employee.description}</p>
    </div>
  </div>
);

export default EmployeeCard;
