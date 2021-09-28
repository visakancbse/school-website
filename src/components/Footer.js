import React from "react";
import "../css/contact.css";
import Logo from "../images/logo.png";
import {
  CopyrightRounded,
  FacebookRounded,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import ContactInfo from "./Contact/ContactInfo";

function Footer() {
  return (
    <div>
      <div className="footer grid-2">
        <div style={{textAlign:"center",padding:'1%'}}>
          <img src={Logo} alt="Logo" />
          <p>
            At Visakan, we believe that each kid has their own and unique bunch
            of talents and we strive to make them better at it.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "150px",
              margin: "auto",
            }}
          >
            <a style={{ color: "white" }} href="https://www.facebook.com">
              <FacebookRounded />
            </a>
            <a style={{ color: "white" }} href="https://www.twitter.com">
              <Twitter />
            </a>
            <a style={{ color: "white" }} href="https://www.instagram.com">
              <Instagram />
            </a>
            <a
              style={{ color: "white" }}
              href="https://www.youtube.com/channel/UC_G0EaQvIVoNcGc8YhO2UEA"
            >
              <YouTube />
            </a>
          </div>
        </div>
        <div className="grid-2 footer">
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
          <ContactInfo/>
        </div>
      </div>
      <div className="copyright">
        <CopyrightRounded />
        Copyright 2021 Visakan school - madurai. Made by{" "}
        <a
          className="a-down"
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
