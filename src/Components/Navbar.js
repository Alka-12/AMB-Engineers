import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import mainLogo from "../assets/logo.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <img
                        alt=""
                        src={mainLogo}
                        width="140"
                        height="90"
                        className="d-inline-block align-top"
                    />{' '}
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Clients">Clients</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Services">Services</NavLink>
                        </li>
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;