import React, { useEffect, useRef } from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ChevronLeftRounded, KeyboardArrowDown } from "@mui/icons-material";

import logo from "../images/logo.png";

function NavBar() {
  const navRef = useRef(null);
  const closeNavBar = () => {
    navRef.current.className = "navbox";
  };
  useEffect(() => {}, []);
  return (
    <>
      <div
        className="menu"
        onClick={() => {
          navRef.current.className = "navopen";
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
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/infrastructure"
            >
              Infrastructure
            </NavLink>
            <div className="dropdown">
              <div className="link">
                Education
                <KeyboardArrowDown
                  style={{
                    display: "inline-flex",
                    verticalAlign: "middle",
                    height: "20px",
                  }}
                />
              </div>
              <div className="dropdown-box drop-open">
                <NavLink
                  className="dropdown-item link"
                  activeClassName="active"
                  onClick={closeNavBar}
                  to="/kindergarten"
                >
                  Kindergarten
                </NavLink>
                <NavLink
                  className="dropdown-item link"
                  activeClassName="active"
                  onClick={closeNavBar}
                  to="/primary"
                >
                  Primary
                </NavLink>
                <NavLink
                  className="dropdown-item link"
                  activeClassName="active"
                  onClick={closeNavBar}
                  to="/secondary"
                >
                  Secondary
                </NavLink>
                <NavLink
                  className="dropdown-item link"
                  activeClassName="active"
                  onClick={closeNavBar}
                  to="/seniorsecondary"
                >
                  Senior Secondary
                </NavLink>
              </div>
            </div>

            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/admission"
            >
              Admission
            </NavLink>
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/careers"
            >
              Careers
            </NavLink>
            <NavLink
              className="link"
              activeClassName="active"
              onClick={closeNavBar}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
