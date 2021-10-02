import React, { useEffect } from "react";
// import { Typography } from "@mui/material";
import "../../css/style.css";
import KG1 from "./KGimages/kindergarten1.JPG";
import KG2 from "./KGimages/kindergarten2.JPG";
import KG3 from "./KGimages/kindergarten3.JPG";
import AlternateGrid from "../AlternateGrid";
// import KG4 from './KGimages/kindergarten4.JPG'
function Kindergarten() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  const contents = [
    {
      image: KG1,
      dimension: {
        x: "400",
        y: "250",
      },
      desc: [
        "Discipline is helping a child solve a problem. Punishment is making a child suffer for having a problem. To raise problem solvers, focus on solutions, not retribution.",
        "“You can’t teach people everything they need to know. The best you can do is position them where they can find what they need to know when they need to know it.“",
      ],
    },
    {
      image: KG2,
      dimension: {
        x: "250",
        y: "300",
      },
      title: "Art and Crafts",
      desc: [
        "Art and crafts are a great way to ignite creativity and spark some imagination in young minds. Art and crafts are a great way to ignite creativity and spark some imagination in young minds."   
],
    },
    {
      image: KG3,
      dimension: {
        x: "400",
        y: "250",
      },
      title: "Visual Learning",
      desc: [
        "Flash cards can be bright and colorful and make a real impact on visual learners to address the multi intelligent learners in the classroom. Our teachers use the flash cards for various learning activities like memory activities, drilling activities and identification activities encouraging reading activities and sight reading.",
      ],
    },
  ];
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <div
          className="header"
        >
          Kindergarten
        </div>
      </div>
      <div>
        {contents.map((content, i) => {
          return <AlternateGrid key={i} direction={i % 2 === 0} content={content} />;
        })}
      </div>
    </div>
  );
}

export default Kindergarten;
