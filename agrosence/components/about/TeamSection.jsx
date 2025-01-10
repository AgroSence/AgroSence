import React from 'react';
import TeamCard from './TeamCard';
import { resource } from '../../resource';

const TeamSection = () => {
  const teamMembers = [
    {
      image: `${resource.Jeet.src}`,
      name: "Jeet Jani",
      role: "UI/UX Designer & Front end developer"
    },
    {
      image: `${resource.Herin.src}`,
      name: "Herin Patel",
      role: "Cloud Engineer & Back end developer"
    },
    {
      image: `${resource.Dhruv.src}`,
      name: "Dhruv Shere",
      role: "Front end & Back end developer"
    }
  ];

  return (
    <section className="team-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Team</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

