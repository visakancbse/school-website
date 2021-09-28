import { CalendarToday } from "@mui/icons-material";
import React from "react";
import "./css/events.css";
import Event from "./Event";

function UpcomingEvents() {
  const events = [
    {
      date: "02",
      month: "OCT",
      name: "Gandhi Jayanthi",
      time: "10.30am-11.00am",
      place: "online",
    },
    {
      date: "02",
      month: "OCT",
      name: "Gandhi Jayanthi",
      time: "10.30am-11.00am",
      place: "online",
    },
    {
      date: "02",
      month: "OCT",
      name: "Gandhi Jayanthi",
      time: "10.30am-11.00am",
      place: "online",
    },
  ];
  return (
    <div className="event-box">
      <div className="event-list">
        <h1>
          <CalendarToday /> Upcoming Events
        </h1>
        {events.length > 0 ? (
          events.map((element) => <Event event={element} />)
        ) : (
          <h1 style={{ color: "red" }}>No Upcoming Events</h1>
        )}
      </div>
    </div>
  );
}

export default UpcomingEvents;
