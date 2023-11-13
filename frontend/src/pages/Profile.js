import React, { useState } from "react";
import "./Profile.css";
import BasicInfoForm from "../Components/BasicInfoForm";
import ExperienceForm from "../Components/ExperienceForm";
import SocialForm from "../Components/SocialForm";
import Coverimg from "../images/coverphoto.jpg";
import Profileimg from "../images/profile.jpeg";
import ProfilePage from "../Components/ProfilePage-gpt/ProfilePage"
import ChatApp from "../Components/ChatBox/ChatApp";
export const Profile = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="images">
          <img className="cover" src={Coverimg} alt="cover" />
          <img className="profilepic" src={Profileimg} alt="profilepic" />
        </div>
        <div className="profile-name">
          <h1>Horipriya Das Arpita</h1>
        </div>
        <button className="edit-profile" onClick={handleClick}>
          Edit Profile
        </button>
      </div>

      {showForm && (
        <div className="form-container">
          <div className="form-overlay" onClick={handleClose}></div>
          <div className="form-box">
            <div className="tabs">
              <button
                className={activeTab === "basic" ? "active" : ""}
                onClick={() => handleTabChange("basic")}
              >
                Basic Info
              </button>
              <button
                className={activeTab === "experience" ? "active" : ""}
                onClick={() => handleTabChange("experience")}
              >
                Experience
              </button>
              <button
                className={activeTab === "social" ? "active" : ""}
                onClick={() => handleTabChange("social")}
              >
                Social Links
              </button>
            </div>

            {/* Render different form content based on the active tab */}
            {activeTab === "basic" && <BasicInfoForm />}

            {activeTab === "experience" && <ExperienceForm />}

            {activeTab === "social" && <SocialForm />}
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="detail-container">
        <div className="Bio">
          <h2>Bio</h2>
          <p>This is Arpitaa, I love to sleep... hehe hehe hehe</p>
        </div>
        <div className="Skill-set"></div>
      </div>

      <div>
        <ProfilePage />
      </div>
    </div>
    
  );
};
