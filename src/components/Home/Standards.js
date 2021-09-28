import React from "react";
import Kindergarten from './images/kindergarten.JPG'
import Primary from './images/primary.JPG'
import Secondary from './images/secondary.JPG'
import SeniorSecondary from './images/senior-secondary.JPG'
import CardContent from "./CardContent";

function Standards() {
  const content = [
      { title: "Kindergarten", desc: "", image: Kindergarten },
      { title: "Primary", desc: "", image: Primary },
      { title: "Secondary", desc: "", image: Secondary},
      { title: "Senior Secondary", desc: "", image: SeniorSecondary },
    ];
  return <div className="grid">
      {content.map(element=><CardContent key={element.title} content={element}/>)}
  </div>;
}

export default Standards;
