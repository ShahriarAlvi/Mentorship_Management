// MentorProfile.js
import React from "react";

const MentorProfile = ({ mentor }) => {
  const { name, country, skills, workExperience, profilePicture } = mentor;

  return (
    <div className="mentor-profile">
      <img className="images" src={profilePicture} alt={name} />
      <h2>{name}</h2>
      <p>{country}</p>
      <p className="skills">Skills: {skills.join(", ")}</p>
      <p>{workExperience}</p>
    </div>
  );
};

export default MentorProfile;
