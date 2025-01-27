import React from 'react';
import { Link } from 'react-router-dom';
import { resource } from '../../resource';

const FeatureCard = ({ title, description, image, index }) => {
  const isEven = index % 2 === 0;

  const linkPaths = {
    "Market access": "/features/market-access",
    "Crop detection report": "/features/crop-detection",
    "AI chat bot": "/features/ai-chatbot",
    "Resources": "/features/resources",
    "Government schemes": "/features/government-schemes",
  };

  return (
    <div className={`container my-4 my-md-5 ${isEven ? '' : 'offset-md-4'}`}>
      <div className="row align-items-center">
        <div className="col-md-4 position-relative mb-4 mb-md-0">
          <img
            src={resource.Leaf.src}
            alt="Decorative leaf"
            className="position-absolute d-none d-md-block"
            style={{
              width: "8.5rem",
              height: "auto",
              left: "-5.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              opacity: 0.8,
              zIndex: -1
            }}
          />
          <img
            src={image}
            alt={title}
            className="img-fluid rounded shadow w-auto"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-4">
          <div className="px-3 py-4 text-center text-md-start">
            <h2 className="mb-3 text-success fw-bold">{title}</h2>
            <div className="d-flex align-items-start mb-4">
              <div className="vr me-3" style={{width:'5px', height: 'auto', backgroundColor:'#34a853'}}></div>
              <p className="text-muted mb-0">{description}</p>
            </div>
            <Link to={linkPaths[title]}>
            <button className="btn px-4 py-3 text-white fw-medium" style={{backgroundColor:"#34a853", borderRadius:"0px 25px 25px 25px"}}>CLICK HERE</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
