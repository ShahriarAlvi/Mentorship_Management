import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <img className="profile-image" src={profile.imageUrl} alt={profile.name} />
      <h3 className="profile-name">{profile.name}</h3>
      <p className="profile-title">{profile.title}</p>
      <p className="profile-bio">{profile.bio}</p>
    </div>
  );
};

export default ProfileCard;