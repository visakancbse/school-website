import React, { useEffect, useRef } from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ChevronLeftRounded } from "@mui/icons-material";

import logo from "../images/logo.png";

function NavBar() {
  const navRef = useRef(null);
  const closeNavBar = () => {
    // navRef.current.style.width = "0px";
    // navRef.current.style.overflow = "hidden";

    navRef.current.className = "navbox";
    // navRef.current.classList.remove("navopen");
  };
  useEffect(() => {
    //   window.addEventListener("scroll",closeNavBar);
  }, []);
  return (
    <>
      {/* <img src={logo} alt="logo"/> */}
      <div
        className="menu"
        onClick={() => {
          navRef.current.className = "navopen";
          // navRef.current.classList.remove("navclose");
        }}
      >
        <MenuRoundedIcon />
      </div>

      <div className="navbox" ref={navRef}>
        <div className="close" onClick={closeNavBar}>
          <ChevronLeftRounded style={{ fontSize: "xx-large" }} />
        </div>

        <div className="navbar">
          <div className="top-logo">
            <img width="300" height="70" src={logo} alt="Logo" />
          </div>
          {/* <div className="nav"> */}
          <div className="navlinks">
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              exact
              to="/"
            >
              Home
            </NavLink>
            {/* </div>
      <div className="nav"> */}
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/infrastructure"
            >
              Infrastructure
            </NavLink>
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/education"
            >
              Education
            </NavLink>
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/gallery"
            >
              Gallery
            </NavLink>
            {/* </div>
      <div className="nav"> */}
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/admission"
            >
              Admission
            </NavLink>
            {/* </div>
      <div className="nav"> */}
            {/* <NavLink className="link" activeClassName="active" onClick={closeNavBar} to="/application">
            Application
          </NavLink> */}
            {/* </div>
      <div className="nav"> */}
            {/* </div>
      <div className="nav"> */}
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/careers"
            >
              Careers
            </NavLink>
            {/* </div>
      <div className="nav"> */}
            {/* <NavLink className="link" activeClassName="active" onClick={closeNavBar} to="/features">
            Features
          </NavLink> */}
            {/* </div>
      <div className="nav"> */}
            {/* </div>
      <div className="nav"> */}
            {/* <NavLink className="link" activeClassName="active" onClick={closeNavBar} to="/about">
            About
          </NavLink> */}
            {/* </div>
      <div className="nav"> */}
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/contact"
            >
              Contact
            </NavLink>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
