import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import EmployeeCard from './EmployeeCard';
import Profile from './Profile';
import SearchBar from './SearchBar';
import './profile.css'

const employees = [
  {
    name: 'John Doe',
    place: 'New York',
    age: 30,
    description: 'Web Developer',
    picture: 'john.jpg',
  },
  // Add more employee data as needed
];

const MainPage = () => (
  <div className="main-page">
    <Header />
    <div className="content">
      <Sidebar />
      <div className="main-content">
        <SearchBar />
        <div className="employee-list">
          {employees.map((employee, index) => (
            <EmployeeCard key={index} employee={employee} />
          ))}
        </div>
      </div>
      <Profile />
    </div>
  </div>
);

export default MainPage;
