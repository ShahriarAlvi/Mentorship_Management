import {Link} from 'react-router-dom'
import './Navbar.css';

export const Navbar = () => {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    );
};