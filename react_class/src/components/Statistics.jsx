import React from 'react';
import './Statistics.css';

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="stat-bar">
        <div className="bar-label">Approved Booking</div>
        <div className="bar-container">
          <div className="bar">
            <div className="progress" style={{ width: '90%' }}></div>
          </div>
          <div className="stat-text">90%</div>
        </div>
      </div>
      <div className="stat-bar">
        <div className="bar-label">Booking Canceled</div>
        <div className="bar-container">
          <div className="bar">
            <div className="progress" style={{ width: '10%' }}></div>
          </div>
          <div className="stat-text">10%</div>
        </div>
      </div>
      <div className="stat-bar">
        <div className="bar-label">Event Reach</div>
        <div className="bar-container">
          <div className="bar">
            <div className="progress" style={{ width: '65%' }}></div>
          </div>
          <div className="stat-text">65%</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
