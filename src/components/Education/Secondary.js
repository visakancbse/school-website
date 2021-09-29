import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "../../css/style.css";
function Secondary() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography variant="h2" className="header">
          Secondary
        </Typography>
      </div>
    </div>
  );
}

export default Secondary;
