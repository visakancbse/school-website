import React, { useEffect, useRef, useState } from "react";
import "../css/dropbar.css";
import { NavLink } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { CloseRounded } from "@mui/icons-material";

import logo from "../images/logo.png";

function DropBar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleNavBar = () => {
    // navRef.current.style.width = "0px";
    // navRef.current.style.overflow = "hidden";

    setOpen((s) => !s);
    navRef.current.className = !open ? "navopen" : "navbar";
    // navRef.current.classList.remove("navopen");
  };

  useEffect(() => {
    //   window.addEventListener("scroll",closeNavBar);
  }, []);
  return (
    <>
      <div className="navbox">
        {/* <div className="close" onClick={closeNavBar}>
          
        </div> */}
        <div>

          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="navbar" ref={navRef}>
          {/* <div className="nav"> */}
          <div className="menu" onClick={handleNavBar}>
            {open ? <CloseRounded /> : <MenuRoundedIcon />}
          </div>

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

export default DropBar;
