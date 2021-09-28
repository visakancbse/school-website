import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "../css/style.css";

function Careers() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography variant="h2" className="header">
          Careers
        </Typography>
      </div>
    </div>
  );
}

export default Careers;
