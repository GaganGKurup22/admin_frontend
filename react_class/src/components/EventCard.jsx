import React from 'react';
import PropTypes from 'prop-types';
import './EventCard.css';

const EventCard = ({ image }) => {
  return (
    <div className="event-card">
      <img src={image} alt="Event" />
      <button className="update-btn">Update</button>
      <button className="delete-btn">Delete</button>
    </div>
  );
};

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default EventCard;
