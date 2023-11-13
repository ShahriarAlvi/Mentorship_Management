import React from 'react';
import { Link } from 'react-router-dom';
import './LoggedNavbar.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

export const LoggedNavbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Logo</Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/courses" className="nav-link">Courses</Link>
                </li>
                <li className="nav-item">
                    <Link to="/learn" className="nav-link">Learn</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/user" className="nav-link"> <DropdownMenu/> </Link>
                </li>



            </ul>
        </nav>
    );
};

export default LoggedNavbar;