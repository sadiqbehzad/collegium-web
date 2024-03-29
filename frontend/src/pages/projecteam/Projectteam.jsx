import React, { useEffect } from 'react'; 
import Navbar from '../../components/navbar/Navbar';

import ProjectteamsHeader from './ProjectteamHeader/ProjectteamHeader';
import ProjectteamsBenefits from './projectteamBenefits/ProjectteamBenefits';
import ProjectteamsProducts from './ProjectteamProducts/ProjectteamProducts';
import ProjectteamsTestimony from './ProjectteamTestimony/ProjectteamTestimony';
import ProjectteamServices from './ProjectteamServices/ProjectteamServices';
import SFooter from '../../components/footer/SFooter';
import ContactCard from '../../components/contactCard/SadiqContactCard';


const Projectteams = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "White";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <Navbar background="transparent" color="black" h3Color="black" />
      <ProjectteamsHeader />
      <div className="contact-card-div">
        <ContactCard />
      </div>
      <ProjectteamsBenefits />
      <ProjectteamsTestimony />
      <ProjectteamServices />
      <ProjectteamsProducts />
      <SFooter />
    </>
  );
}

export default Projectteams;
