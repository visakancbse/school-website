import React, { useEffect, useRef } from "react";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

// import logo from "../images/logo.png";

function NavBar() {
  const navRef = useRef(null);
  const closeNavBar=()=>{
    navRef.current.style.display = "none";
  }
  useEffect(()=>{
    //   window.addEventListener("scroll",closeNavBar);
  },[])
  return (
    <>
      <div
        className="menu"
        onClick={() => {
          navRef.current.style.display = "block";
        }}
      >
        <MenuRoundedIcon />
      </div>

      <div className="navbox" ref={navRef}>
        <div
          className="close"
          onClick={closeNavBar}
        >
          X
        </div>

        <div className="navbar">
          {/* <div className="nav"> */}
          {/* <img className="logo" src={logo} alt="Logo" /> */}

          <NavLink className="link" activeClassName="active" exact to="/">
            Home
          </NavLink>
          {/* </div>
      <div className="nav"> */}
          <NavLink className="link" activeClassName="active" to="/academic">
            Academic
          </NavLink>
          {/* </div>
      <div className="nav"> */}
          <NavLink className="link" activeClassName="active" to="/admission">
            Admission
          </NavLink>
          {/* </div>
      <div className="nav"> */}
          <NavLink className="link" activeClassName="active" to="/application">
            Application
          </NavLink>
          {/* </div>
      <div className="nav"> */}
          <NavLink className="link" activeClassName="active" to="/teachers">
            Teachers
          </NavLink>
          {/* </div>
      <div className="nav"> */}
          <NavLink className="link" activeClassName="active" to="/fees">
            Fees
          </NavLink>
          {/* </div>
      <div className="nav"> */}
          <NavLink className="link" activeClassName="active" to="/features">
            Features
          </NavLink>
          {/* </div>
      <div className="nav"> */}
          <NavLink className="link" activeClassName="active" to="/gallery">
            Gallery
          </NavLink>
          {/* </div>
      <div className="nav"> */}
          <NavLink className="link" activeClassName="active" to="/about">
            About
          </NavLink>
          {/* </div>
      <div className="nav"> */}
          <NavLink className="link" activeClassName="active" to="/contact">
            Contact
          </NavLink>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default NavBar;
