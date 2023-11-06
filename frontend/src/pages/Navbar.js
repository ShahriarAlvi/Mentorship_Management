import {Link} from 'react-router-dom'
import './Navbar.css';
import Profilepic from "../images/profile.jpeg"
import Logo from "../images/logo.png"

export const Navbar = () => {
    return (
      <div className="navbar">
        <div className='container'>
          <div className='logo'>
            <Link className="imgLogoLink" to="/">
              <img className="imgLogo" src={Logo} alt="LOGO" />
            </Link>
          </div>
          <div className='links'>
            <Link className="link" to="/welcome/:email">Home</Link>
            <Link className="link" to="/mentors">Mentors</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/signup">SignUp</Link>
            <Link className="imgProfileLink" to="/profile">
              <img className="imgProfile" src={Profilepic} alt="Profile" />
            </Link>
          </div>
        </div>
      </div>
    );
};