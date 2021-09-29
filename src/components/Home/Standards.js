import React from "react";
import Kindergarten from './images/kindergarten.JPG'
import Primary from './images/primary.JPG'
import Secondary from './images/secondary.JPG'
import SeniorSecondary from './images/senior-secondary.JPG'
import CardContent from "./CardContent";

function Standards() {
  const content = [
      { title: "Kindergarten", desc: "", image: Kindergarten,link:'/kindergarten' },
      { title: "Primary", desc: "", image: Primary,link:'/primary' },
      { title: "Secondary", desc: "", image: Secondary,link:'/secondary'},
      { title: "Senior Secondary", desc: "", image: SeniorSecondary,link:'/seniorsecondary' },
    ];
  return <div className="grid">
      {content.map(element=><CardContent key={element.title} content={element}/>)}
  </div>;
}

export default Standards;
