import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import "../css/style.css";
import { careers } from "../AddCareers";
import { LocationOn } from "@mui/icons-material";

function Careers() {
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
          Careers
        </Typography>
      </div>
      <div
        style={{
          fontFamily: "Times new roman",
          textAlign: "center",
          padding: "1%",
        }}
        className="non-grid-content"
      >
        <p>
          At Visakan, we believe that each kid has their own and unique bunch of
          talents and we strive to make them better at it. With teachers
          equipped to educate students in the best possible manner, parents can
          be rest assured that their children are in safe hands.
        </p>
        <Typography
          style={{
            fontFamily: "Times new roman",
            textAlign: "center",
            padding: "1%",
          }}
          variant="h4"
        >
          Current Opening Positions
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {careers.length > 0 ? (
            careers.map((career, i) => (
              <CareerComponent career={career} key={i} />
            ))
          ) : (
            <h1 style={{ textAlign: "center" }}>No Current Openings</h1>
          )}
        </div>
        <div style={{ textAlign: "center", padding: "1%" }}>
          <a
            style={{ textDecoration: "none" }}
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRo6mAzXDF-ZNtSRcdzLaUvrozH8BFT0408IeanSp-9PDi1A/viewform?usp=sf_link"
            target="blank"
          >
            <Button style={{ backgroundColor: "#f44336", color: "aliceblue" }}>
              Click here to apply
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

const CareerComponent = ({ career }) => {
  return (
    <div
      style={{
        width: "200px",
        backgroundColor: "white",
        borderRadius: "5px",
        borderLeft: "5px solid orchid",
        padding: "0% 1%",
      }}
    >
      <b>
        <p>{career.name}</p>
      </b>
      <span
        style={{
          display: "inline-flex",
          verticalAlign: "middle",
          padding: "1%",
        }}
      >
        <LocationOn style={{ fontSize: "20px" }} />
        {career.location}
      </span>
    </div>
  );
};
export default Careers;
