import React from "react";
import "../css/contact.css";
import Logo from "../images/logo.png";
import {
  CopyrightRounded,
  FacebookRounded,
  Favorite,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import ContactInfo from "./Contact/ContactInfo";

function Footer() {
  return (
    <div>
      <div className="footer grid-2">
        <div style={{ textAlign: "center", padding: "1%" }}>
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
            <a
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/Visakan-School-CBSE-566566400154128"
            >
              <FacebookRounded />
            </a>

            <a
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/visakan_school_cbse/"
            >
              <Instagram />
            </a>
            <a
              target="_blank"
              style={{ color: "white" }}
              rel="noreferrer"
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
          <ContactInfo />
        </div>
      </div>
      <div className="copyright">
        <CopyrightRounded style={{ fontSize: "20px" }} /> Copyright 2021 Visakan
        school - madurai. Made with{" "}
        <Favorite
          style={{
            display: "inline-flex",
            verticalAlign: "middle",
            color: "red",
          }}
        />{" "}
        by{" "}
        <a
          rel="noreferrer"
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
