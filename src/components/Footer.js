import React from "react";
import "../css/footer.css";
import Logo from "../images/logo.png";
import { CopyrightRounded } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer grid-2">
        <div>
          <img src={Logo} alt="Logo" />
          <p>
            At Visakan, we believe that each kid has their own and unique bunch
            of talents and we strive to make them better at it.
          </p>
        </div>
        <div>
          <h2>Quick links</h2>
          <div>
            <NavLink className="link-down" exact to="/">
              Home
            </NavLink>
            <NavLink className="link-down" to="/infrastructure">
              Infrastructure
            </NavLink>
            <NavLink className="link-down" to="/education">
              Education
            </NavLink>
            <NavLink className="link-down" to="/gallery">
              Gallery
            </NavLink>
            <NavLink className="link-down" to="/admission">
              Admission
            </NavLink>
            <NavLink className="link-down" to="/careers">
              Carreers
            </NavLink>

            <NavLink className="link-down" to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className="copyright">
        <CopyrightRounded />
        Copyright 2021 Visakan school - madurai. Made by{" "}
        <a
          className="link-down"
          href="https://www.linkedin.com/in/prakash-devendran"
          target="blank"
        >
          Prakash D
        </a>
      </div>
    </div>
  );
}

export default Footer;
