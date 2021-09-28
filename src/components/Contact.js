import React from "react";
import { Typography } from "@mui/material";
import "../css/style.css";
import ContactInfo from "./Contact/ContactInfo";
import Location from "./Contact/Location";
function Contact() {
  return (
    <div>
      <Typography variant="h2" className="header">
        Contact
      </Typography>
      <div className="background">
        <div className="grid-map">
          <div>
            <Location />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
