// ProfilePage.js
import React, { useState } from 'react';
import ProfileOverview from './ProfileOverview';
import Commendations from './Commendations';
import MyMentors from './MyMentors';
// import Expertise from './Expertise';
// import Experience from './Experience';
// import Education from './Education';
import './ProfilePage.css'

const ProfilePage = () => {
  const [selectedSegment, setSelectedSegment] = useState('overview');

  const handleSegmentChange = (segment) => {
    setSelectedSegment(segment);
  };

  return (
    <div className="profile-page">
      {/* Profile Header */}
      <div className="profile-header">
        {/* Add profile picture, name, and description */}
        <img src="profile-picture.jpg" alt="Profile" />
        <h2>John Doe</h2>
        <p>Web Developer</p>
        <button>Edit Profile</button>
      </div>

      {/* Profile Segments */}
      <div className="profile-segments">
        <button onClick={() => handleSegmentChange('overview')}>Overview</button>
        <button onClick={() => handleSegmentChange('commendations')}>Commendations</button>
        <button onClick={() => handleSegmentChange('mentors')}>My Mentors</button>
      </div>

      {/* Display selected segment details */}
      {selectedSegment === 'overview' && <ProfileOverview />}
      {selectedSegment === 'commendations' && <Commendations />}
      {selectedSegment === 'mentors' && <MyMentors />}

      {/* Expertise Section */}
      {/* <Expertise /> */}

      {/* Experience Section */}
      {/* <Experience /> */}

      {/* Education Section */}
      {/* <Education />  */}
    </div>
  );
};

export default ProfilePage;
