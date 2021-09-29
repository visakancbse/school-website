import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
import "./css/style.css";

function CardContent({ content, ...props }) {
  const history = useHistory();
  return (
    <div className="card">
      <img className="card-image" src={content?.image} alt={content?.title} />
      <h2>{content?.title}</h2>
      <Button
      style={{backgroundColor:'#f44336'}}
        variant="contained"
        onClick={() => history.push(content?.link)}
      >
        Learn more
      </Button>
    </div>
  );
}

export default CardContent;
