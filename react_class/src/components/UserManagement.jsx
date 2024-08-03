import React from 'react';
import EventCard from './EventCard';
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';
import event3 from '../assets/images/event3.jpg';
import './UserManagement.css';

const UserManagement = () => {
  // Define the addEvent function here
  const addEvent = () => {
    alert('Add Event button clicked!');
    // Implement the logic to add a new event
  };

  return (
    <div className="user-management">
      <button className="manage-user-btn" onClick={() => alert('Manage User button clicked!')}>
        Manage User
      </button>
      <div className="events">
        <EventCard image={event1} />
        <EventCard image={event2} />
        <EventCard image={event3} />
      </div>
      <div className="add-event">
        <button className="add-event-btn" onClick={addEvent}>+</button>
      </div>
    </div>
  );
};

export default UserManagement;
