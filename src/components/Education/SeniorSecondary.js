import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "../../css/style.css";
// import Senior1 from "./SeniorSecondaryImages/senior1.JPG";
import Senior2 from "./SeniorSecondaryImages/senior2.JPG";
import AlternateGrid from "../AlternateGrid";
function SeniorSecondary() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  const contents = [
    {
      image: Senior2,
      dimension: {
        x: "400",
        y: "250",
      },
      title: "Experimental Learning",
      desc: [
        "Individual labs with instruments, equipments and elements for learning of Physical aspects of science, the chemical reactions and biological specimens benefit the students with easy understanding of concepts.Learning of such concepts through yearly field visits amplifies effective learning.",
      ],
    },
  ];
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography variant="h2" className="header">
          Senior Secondary
        </Typography>
      </div>
      <div>
        {contents.map((content, i) => {
          return <AlternateGrid key={i} direction={i % 2 === 0} content={content} />;
        })}
      </div>
    </div>
  );
}

export default SeniorSecondary;
