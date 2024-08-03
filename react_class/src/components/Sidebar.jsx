import React from 'react';
import { FaUser, FaCalendarAlt, FaImages, FaDoorOpen } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <button className="nav-btn"><FaUser /></button>
        <button className="nav-btn"><FaCalendarAlt /></button>
        <button className="nav-btn"><FaImages /></button>
        <button className="nav-btn"><FaDoorOpen /></button>
      </nav>
    </div>
  );
};

export default Sidebar;
