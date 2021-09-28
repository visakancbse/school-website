import { LocationOn, Schedule } from "@mui/icons-material";
import React from "react";

function Event({ event, ...props }) {
  return (
    <div className="grid-2s">
      <div className="event-date">
        <span className="h1">{event.date}</span>
        <span className="h2">{event.month}</span>
      </div>
      <div className="event-name">
        <span
          style={{
            display: "block",
            fontSize: "x-large",
            fontWeight: "bolder",
          }}
        >
          {event.name}
        </span>
        <p style={{ fontSize: "x-small",fontStyle:'italic' }}>
          <Schedule style={{ fontSize: "x-small" }} />
          {event.time} <LocationOn style={{ fontSize: "x-small" }} />
          {event.place}
        </p>
      </div>
    </div>
  );
}

export default Event;
