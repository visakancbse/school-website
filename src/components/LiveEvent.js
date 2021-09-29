import { Close, LocationOn, Schedule } from "@mui/icons-material";
import React, { useRef } from "react";
import { events } from "../AddEvents.js";
import "../css/style.css";
function LiveEvent() {
  const ref = useRef(null);
  if (events?.length === 0) {
    return null;
  }
  const { date, month, name, time, place } = events[0];
  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "white",
        overflow: "hidden",
      }}
    >
      <div className="marquee">
        Upcoming Event: <span style={{ fontSize: "x-large" }}>{name} </span>
        <span>{` ${date}/${month} `}</span>{" "}
        <span style={{ fontSize: "x-small" }}>
          <Schedule style={{ fontSize: "x-small" }} />
          {time} <LocationOn style={{ fontSize: "x-small" }} />
          {place}
        </span>
      </div>
      <div
        style={{
          top: "0px",
          right: "1px",
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.3)",
          cursor: "pointer",
        }}
        onClick={() => {
          if (ref !== null) {
            ref.current.style.display = "none";
          }
        }}
      >
        <Close />
      </div>
    </div>
  );
}

export default LiveEvent;
