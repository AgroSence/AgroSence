import React from 'react';
import { BiLeaf } from 'react-icons/bi';

const FeatureCard = ({ title, description, image, index }) => {
  return (
    <div className="container my-4 my-md-5">
      <div className={`row align-items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
        <div className="col-md-4 position-relative mb-4 mb-md-0">
          <BiLeaf
            className="text-success position-absolute d-none d-md-block"
            style={{
              fontSize: "5rem",
              right: index % 2 === 0 ? "auto" : "-3.5rem",
              left: index % 2 === 0 ? "-3.5rem" : "auto",
              top: "50%",
              transform: `scaleX(-1) translateY(-50%) ${index % 2 === 0 ? "scaleX(1)" : "scaleX(-1)" }`,
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
        <div className="col-md-6">
          <div className="px-3 py-4 text-center text-md-start">
            <h2 className="mb-3 text-success fw-bold">{title}</h2>
            <div className="d-flex align-items-center mb-4">
              <div className="vr bg-success me-3" style={{ height: '50px', width:"5px" }}></div>
              <p className="text-muted mb-0">{description}</p>
            </div>
            <button className="btn btn-success px-4 py-2">CLICK HERE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

