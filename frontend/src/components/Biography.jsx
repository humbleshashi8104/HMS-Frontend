import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Founded in 1990, the MediCare Health Institute is a premier 
          medical facility dedicated to providing exceptional healthcare
          services. Located in the Capital city of India, Spreading Over 
          100 acres of area , the institute boasts state-of-the-art technology 
          and a team of world-renowned specialists.
          The institute is renowned for its pioneering research in medical 
          sciences and its commitment to continuous education. Its integrated 
          approach ensures that patients receive personalized and holistic care.
          Harmony Health Institute is also actively involved in community 
          outreach programs, promoting health and wellness through education 
          and preventative care initiatives.
          MediCare Health Institute stands as a beacon of excellence 
          in the medical community, dedicated to improving lives through innovative healthcare solutions.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
