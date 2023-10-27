import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import mainLogo from "../assets/logo1.png";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img
                            src={mainLogo}
                            width="160"
                            height="75"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Service"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Products"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/Clients"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Our Clients
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

                        {click ? (
                            <span className="icon">
                                <HamburgetMenuOpen />{" "}
                            </span>
                        ) : (
                            <span className="icon">
                                <HamburgetMenuClose />
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;

;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import mainLogo from "../assets/logo.png";
// // import "./Navbar.css"

// function Navbar() {
//     return (
//         <>
//             <div className="container-fluid nav_bg fixed-top">
//                 <div className="row">
//                     <div className="col-14 mx-auto">
//                         <nav className="navbar navbar-expand-lg">
//                             <NavLink className="navbar-brand" to="/">
//                                 <img
//                                     src={mainLogo}
//                                     width="160"
//                                     height="75"
//                                     className="d-inline-block align-top"
//                                     alt="React Bootstrap logo"
//                                 />
//                             </NavLink>
//                             <button className="navbar-toggler" type="button">
//                                 <span className="navbar-toggler-icon"></span>
//                             </button>

//                             <div
//                                 className="collapse navbar-collapse"
//                                 id="navbarSupportedContent"
//                             >
//                                 <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
//                                     <li className="nav-item active">
//                                         <NavLink className="nav-link" to="/">
//                                             Home <span className="sr-only"></span>
//                                         </NavLink>
//                                     </li>
//                                     <li className="nav-item">
//                                         <NavLink
//                                             activeClassName="menu_active"
//                                             className="nav-link"
//                                             to="/Products"
//                                         >
//                                             Products
//                                         </NavLink>
//                                     </li>
//                                     <li className="nav-item">
//                                         <NavLink
//                                             activeClassName="menu_active"
//                                             className="nav-link"
//                                             to="/service"
//                                         >
//                                             Services
//                                         </NavLink>
//                                     </li>
//                                     <li className="nav-item">
//                                         <NavLink
//                                             activeClassName="menu_active"
//                                             className="nav-link"
//                                             to="/about"
//                                         >
//                                             About Us
//                                         </NavLink>
//                                     </li>
//                                     <li className="nav-item">
//                                         <NavLink
//                                             activeClassName="menu_active"
//                                             className="nav-link"
//                                             to="/contact"
//                                         >
//                                             Contact Us
//                                         </NavLink>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Navbar;