import React from 'react';
import './projectteamHeader.css'; 
import Button from "../../../components/button/Button";

const ProjectteamHeader = ({ title1, title2, description, label }) => (
  <header className="projectteamHeader"> 
    <h4 className="route">Home/Project Team</h4>
    <h1 className="title">{title1}</h1>
    <h3 className="subtitle">{title2}</h3> 
    <p>{description}</p>
    <div className="projectteamHeaderButton"><Button to="/contactus" label={label} /></div>
  </header>
);


const ProjectteamsHeader  = () => {
  return (
    <div className="projectteam-Header-Page" > 
      <ProjectteamHeader
        title1= "Project Team" 
        title2= "Enhance, Empower,and Excel" 
        description="Empower your team to excel in today's competitive landscape, unlocking new opportunities for growth and innovation."
        label="Contact Us"
      />
    </div>
  );
};

export default ProjectteamsHeader;
