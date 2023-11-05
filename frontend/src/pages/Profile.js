import React from "react";
import './Profile.css';
import Coverimg from "../images/coverphoto.jpg"
import Profileimg from "../images/profile.jpeg"
export const Profile = () => {
    return (
    
    <div className="profile">
      <div className="profile-container">
        <div className="images">
          <img className="cover" src={Coverimg} alt="cover"></img>
          <img className="profilepic" src={Profileimg} alt="profilepic"></img>
        </div>
        <div className="profile-name">
          <h1>Horipriya Das Arpita</h1>
        </div>
        <button className="edit-profile"> Edit Profile </button>
      </div>

      <div className="detail-container">
        <div className="Bio">
          <h2>Bio</h2>
          <p>This is Arpitaa, I love to sleep... hehe hehe hehe</p>
        </div>
        <div className="Skill-set">
        </div>
      </div>
      
    </div>
    
    )
}