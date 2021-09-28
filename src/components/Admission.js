import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import AdmissionImg from "../images/Visakan-admission.jpg";
import "../css/style.css";
import { useHistory } from "react-router";
function Admission() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  const history = useHistory();
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography variant="h2" className="header">
          Admission
        </Typography>
      </div>
      <div className="grid-content">
        <div>
          <img width="500" height="500" src={AdmissionImg} alt="admission" />
        </div>
        <div>
          <h4>Admission Procedure</h4>
          <p>
            The prospectus and application form for admission can be obtained on
            payment of Rs 200/- in cash.
          </p>

          <h4>Documents to be enclosed:</h4>
          <p>
            The following documents must be submitted along with the completed
            application form
          </p>
          <ul style={{ listStyleType: "number" }}>
            <li>
              Recent passport size photograph affixed in the application form.
            </li>
            <li>Attested photo copy Birth Certificate.</li>
            <li>Attested photo copy of a Community Certificate.</li>
            <li>
              Original transfer certificate and progress card of the previous
              school or handed.
            </li>
          </ul>
          <h4>Date of Payment</h4>
          <ul>
            <li>Term I – Before 10th of May</li>
            <li>Term II – Before 30th of September</li>
            <li>Term III- Before 30th of January</li>
          </ul>
        </div>
      </div>
      <div>
        <h4>Age Criteria</h4>
        <p>
          For admission to VISAKAN SCHOOL – the child is expected to be Two and
          a half years to be enrolled in PreKG. Three and a half years for LKG
          Four and a half years for UKG on Ist May.
        </p>
        <h4>Rules to be followed by the students:</h4>
        <ul>
          <li>Students are expected to be punctual and disciplined.</li>
          <li>
            No student is permitted to leave the school premises during the
            working hours except with the permission of the principal. On
            unavoidable circumstances and accompanied by their parents.
          </li>
          <li>
            All students are expected to come in proper and neat uniform to the
            school except on birthdays.
          </li>
          <li>Minimum 85% attendance is compulsory in each academic term.</li>
          <li>
            Using of mobile phones, electronic devises, brining irrelevant
            articles, objects and chewing of gum is strictly prohibited in the
            school premises.
          </li>
        </ul>
      </div>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => history.push("/application-form")}
        className="jump"
      >
        Apply now
      </Button>
    </div>
  );
}

export default Admission;
