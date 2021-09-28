import { EventAvailable } from "@mui/icons-material";
import React from "react";
import "./css/events.css";
import Event from "./Event";
import {events} from '../../AddEvents.js'

function UpcomingEvents() {
  
  return (
    <div className="event-box">
      <div className="event-list">
        <h1 style={{textDecoration:'underline'}}>
          <EventAvailable style={{fontSize:"50px",transform:'translateY(30%)'}}/> Upcoming Events
        </h1>
        {events.length > 0 ? (
          events.map((element,i) => <Event key={i} event={element} />)
        ) : (
          <h1 style={{ color: "red" }}>No Upcoming Events</h1>
        )}
      </div>
    </div>
  );
}

export default UpcomingEvents;
