import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import "../css/style.css";
import School from "../images/school.jpg";
import AboutImg from "../images/visakan-school-about-image.jpg";
function About() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography variant="h2" className="header">
          About Us
        </Typography>
      </div>
      <div className="grid-content">
        <div style={{ textAlign: "center" }}>
          <img style={{ margin: "auto" }} src={School} alt="school" />
        </div>
        <div>
          <p>
            Visakan Charitable Trust is formed in the name of our Founder
            Mr.M.Visakan B.E.M.B.A who was the visionary to start an educational
            institution which would equip the students to be the leaders of
            tomorrow and to face the challenges of this changing global
            community. The Chairman of Visakan School is Mr.M.Manoharan B.A., He
            is also working and giving their social activities via, Sri Visakan
            Charitable Trust at Madurai, Indian Oil Dealer at Madurai, India
            Match Factory at Kovilpatti, and Visakan Thirumana Mandapam at
            Kovilpatti. The Correspondent of Visakan School is Mrs.Baghirathy
            Manoharan M.Sc., She is providing their outsource in Vijay Gas at
            Madurai, India Lubricants at Madurai, and M.Visakan Public Welfare
            Maternity Hospital at Kovilpatti. The management is doing yeomen
            service to the society for the past 25 years by running the
            educational institutions, Hospital and other corporate sectors. The
            main objective of this school is to give an all-round and quality
            education in CBSE curriculum to the children in and around Madurai.
          </p>
        </div>
      </div>
      <div className="grid-content">
        <div>
          <h4>Vision</h4>
          <p>
            To be an institution of excellence where exploration, creativity and
            imagination make learning exciting and learners equip themselves to
            be a global citizen.
          </p>
          <h4>Mission</h4>
          <p>
            Visakan School with an efficient team of staff members provide an
            optimum learning environment in which each student discovers &
            realizes his full potential to become self- directed, vibrant,
            lifelong learners to lead productive lives and to become
            contributing members of the global community.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img style={{ margin: "auto" }} src={AboutImg} alt="school" />
        </div>
      </div>
    </div>
  );
}

export default About;
