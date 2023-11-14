import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";

function Profile() {
  return (
    <div className="profile">
      <Sidebar />

      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className="profileCoverImg" src="../Profile/images/coverphoto.jpg" alt="" />
            <img className="profileUserImg" src="../Profile/images/profile.jpeg" alt="" />
          </div>

          <div className="profileInfo">
            <h4 className="profileInfoName">Shahriar Alvi</h4>
            <span className="profileInfoDescription">jkashdjaskhdkasjhdasjkhdkas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
