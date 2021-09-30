import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "../../css/style.css";
function SeniorSecondary() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography
          style={{ fontFamily: "Times new roman" }}
          variant="h2"
          className="header"
        >
          Senior Secondary
        </Typography>
      </div>
      <div className="non-grid-content">
        <p style={{ fontStyle: "italic" }}>
          We offer three major streams after Grade X to pursue in Grade XI and
          XII at our campus. Students can choose between, Science Commerce
          Humanities/Arts
        </p>
        <h1>Science Stream</h1>
        <p style={{ fontStyle: "italic" }}>
          Science stream is available for those who aspire to pursue
          professional courses after 12th.{" "}
        </p>
        <p style={{ fontStyle: "italic" }}>
          The primary subjects in science stream are,
        </p>
        <ul style={{ fontStyle: "italic" }}>
          <li>Physics</li>
          <li> Chemistry</li>
          <li> Biology</li>
          <li> Mathematics</li>
          <li> Computer Science</li>
        </ul>
        <p style={{ fontStyle: "italic" }}>
          Among other subjects, English is compulsory while the other language
          subjects are left for choice. There are also practical labs along with
          theory, which calls for a lot of hard work for students in this
          stream. This stream provides career options for medical and
          non-medical, including medical science, engineering, and other
          interdisciplinary careers. Those interested in a medical field, need
          to include Biology along with Physics and Chemistry as core subject
          combination, and replace maths with easier physical education. Those
          interested for engineering, can replace biology with computer science
          or physical education as the core subject. However, there are also
          other career options including either two or only one of the science
          subjects.
        </p>

        <p style={{ fontStyle: "italic" }}>
          Choosing science stream after 10th, offers options to pursue further
          higher education in diverse fields such as
        </p>
        <ul style={{ fontStyle: "italic" }}>
          <li> Biochemistry</li>
          <li>Bioinformatics</li>
          <li>Cytology</li>
          <li> Dental Science</li>
          <li> Genetics</li>
          <li> Pharmaceuticals</li>
          <li> Space Exploration</li>
          <li>Biotechnology</li>
          <li> Metallurgy</li>
          <li> Forensic Science and more</li>
        </ul>
        <h1>Commerce Stream</h1>
        <p style={{ fontStyle: "italic" }}>
          Commerce stream is another good option after 10th standard.
        </p>
        <p style={{ fontStyle: "italic" }}>
          {" "}
          The core subjects in the commerce stream are{" "}
        </p>
        <ul style={{ fontStyle: "italic" }}>
          <li>Accountancy</li>
          <li>Economics</li>
          <li>Business</li>
          <li>Studies</li>
          <li>an Elective Subject</li>
        </ul>
        <p style={{ fontStyle: "italic" }}>
          English is compulsory. Elective subjects are
        </p>
        <ul style={{ fontStyle: "italic" }}>
          <li>Mathematics</li>
          <li>Informatics</li>
          <li>Practices</li>
          <li>Business Communication</li>
          <li>Finance</li>
          <li>Statistics , etc.</li>
        </ul>
        <p style={{ fontStyle: "italic" }}>
          {" "}
          You have a wide range of opportunities on selecting the commerce
          stream. You can choose fields related to business, banking, trade,
          finance and accounting as your career option.
        </p>
        <p style={{ fontStyle: "italic" }}>
          Few of the popular graduate courses after 12th for the commerce stream
          are BBA, B.Com, BMS, CA, BBM and more. Hence, if you have a natural
          inclination towards mathematics and analytics, you should prefer
          taking up commerce field.
        </p>
        <h1>Humanities - Arts Stream</h1>
        <p style={{ fontStyle: "italic" }}>This stream offers</p>
        <ul style={{ fontStyle: "italic" }}>
          <li>Business Studies</li>
          <li>Fashion studies</li>
          <li>Beauty and wellness</li>
          <li>Textile designing</li>
        </ul>

        <p style={{ fontStyle: "italic" }}>
          Textile designing with English opening opportunities for creativity
          and innovation in this phase of learning. This skill set stream helps
          in creating clothes and lifestyle accessories, creating designs for
          knitted, woven, printed fabrics or surface ornamented fabrics and the
          likes.
        </p>
      </div>
    </div>
  );
}

export default SeniorSecondary;
