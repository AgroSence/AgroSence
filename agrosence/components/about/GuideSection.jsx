import React from 'react';
import { resource } from '../../resource';

const GuideSection = () => {
  return (
    <section className="guide-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fs-2">Our Guide</h2>
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img 
              src={resource.KMP.src}
              alt="Prof. Kavindra M. Patel"
              className="img-fluid rounded shadow-lg"
              style={{ maxWidth: '300px', margin: '0 auto', display: 'block' }}
            />
          </div>
          <div className="col-lg-8">
            <h3 className="mb-4">Prof. Kavindra M. Patel</h3>
            <p className="mb-4" style={{fontSize:"18px"}}>
              Kavindra patel received B.E. degree in Computer Engineering from North Gujarat University (NGU), Patan in 2011 and M.E. degree in Computer Science and Engineering from Gujarat Technological University (GTU) , Ahmedabad in 2014.
            </p>
            <p style={{fontSize:"18px"}}>
              We are deeply grateful to our esteemed guide for his constant support and invaluable guidance throughout the development of this project. His humble and respectful nature has always made it easy for us to approach him with any challenges we faced. Sir's insightful suggestions and problem-solving approach have helped us overcome obstacles and grow both technically and personally. His dedication to sharing new knowledge and encouraging creativity has been a significant source of motivation for our entire team. We truly appreciate his mentorship and are honored to have him as our guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;

