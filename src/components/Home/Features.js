import { PlayArrow } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function Features() {
  const features1 = [
    "Montessori Trained Staffs for Grade KG & UKG.",
    "Well furnished & spacious class room.",
    "Value based teaching through various practical activities.",
    "Enable the higher Order thinking level.",
    "Modern updated computer lab.",
    "Well equipped science and math lab.",
    "Transport facility in & around Madurai.",
    "Life skill activities.",
  ];
  const features2 = [
    "sports & Games.",
    "ECA& CCA classes.",
    "Well equipped Library.",
    "Health & Hygiene care.",
    "Safety & Security.",
    "Ro Water facility.",
    "Transport facility.",
  ];
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          style={{ fontFamily: "Times new roman", padding: "1%" }}
        >
          The Special Features of Visakan School
        </Typography>
        <div style={{ fontStyle: "italic" }} className="grid-2">
          <div>
            {features1.map((f, i) => {
              return (
                <List key={i}>
                  <ListItem>
                    <ListItemAvatar>
                      <PlayArrow />
                    </ListItemAvatar>
                    <ListItemText primary={f} />
                  </ListItem>
                </List>
              );
            })}
          </div>
          <div>
            {features2.map((f, i) => {
              return (
                <List key={i}>
                  <ListItem>
                    <ListItemAvatar>
                      <PlayArrow />
                    </ListItemAvatar>
                    <ListItemText primary={f} />
                  </ListItem>
                </List>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
