import React from 'react';
import { resource } from '../../resource';

const FeatureHeader = () => {
  return (
    <div 
      className="hero-section position-relative d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${resource.AboutHeader.src})`,
        backgroundSize: 'contain',
        height: '350px'
      }}
    >
      <h1 className="text-white position-relative display-2 fw-bold fs-1">Explore AgroSence By YourSelf</h1>
    </div>
  );
};

export default FeatureHeader;

