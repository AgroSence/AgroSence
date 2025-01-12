import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const FeatureCard = ({ title, description, image, path }) => {
    const navigate = useNavigate();
  
    return (
      <div className="feature-card rounded ">
        <img 
          src={image} 
          alt={title}
          className="w-100 rounded p-4"
          style={{objectFit:"contain"}}
        />
        <div className="text-center p-3">
          <h3 className="fs-5 mb-3">{description}</h3>
          <button 
            className="btn btn-success w-50"
            onClick={() => navigate(path)}
          >
            Click here
          </button>
        </div>
      </div>
    );
  };

export default FeatureCard;