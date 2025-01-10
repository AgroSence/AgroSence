import React from 'react';

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 border-0 shadow-sm p-4">
        <img 
          src={image}  
          alt={name}
          style={{ height: '350px', objectFit: 'cover' }}
        />
        <div className="card-body text-center">
          <h5 className="card-title mb-1">{name}</h5>
          <p className="card-text text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

