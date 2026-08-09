import React from 'react'

const NoteCard = () => {
  return (
    <div className="">

      {/* Top */}
      <div className="flex justify-between items-center">
        <i className="ri-pushpin-fill"></i>

        <i className="ri-more-2-fill"></i>
      </div>

      {/* Title */}
      <h2>
        React Project Ideas
      </h2>

      {/* Content */}
      <ul>
        <li>Notes App</li>
        <li>Expense Tracker</li>
        <li>Weather Dashboard</li>
        <li>E-commerce Store</li>
      </ul>

      {/* Bottom */}
      <div>
        <span>Ideas</span>

        <p>
          May 30, 2024 • 10:30 AM
        </p>
      </div>

    </div>
  );
};

export default NoteCard;
