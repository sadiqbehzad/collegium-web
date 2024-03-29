import React from 'react';
import './ownersBenefits.css';

import OwnersPic1 from '../../../images/owners/ownersProjectPic1.png';
import OwnersPic2 from '../../../images/owners/ownersProjectPic2.png';
import OwnersPic3 from '../../../images/owners/ownersProjectPic3.png';


const BenefitsContainer = ({ imageUrl, label, description }) => (
  <div className="benefitsContainer">
    <div className="imageContainer" alt={label} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="image-label">{label}</div>
    </div>
    <p>{description}</p>
  </div>
);



const Owners = () => {
  return (
    <div className="owners-benefits-Page">
      <div className="owners-benefits-Container">
        <BenefitsContainer
          imageUrl={OwnersPic1}
          label="Cost Optimization"
          description="Implementing strategic measures to optimize costs, unlocking new avenues for financial efficiency and resource utilization."
        />
        <BenefitsContainer
          imageUrl={OwnersPic2}
          label="Streamlined Scheduling"
          description="Accelerating project timelines, streamlining scheduling processes, and ensuring resource optimization."
        />
        <BenefitsContainer
          imageUrl={OwnersPic3}
          label="Proactive Risk Mitigation"
          description="Mitigating potential risks safeguarding your projects and
        ensuring a smoother development process"
        />
      </div>
    </div>
  );
};

export default Owners;