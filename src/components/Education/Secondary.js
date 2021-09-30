import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "../../css/style.css";
import Secondary1 from "./SecondaryImages/secondary1.jfif";
import Secondary2 from "./SecondaryImages/secondary2.JPG";
import AlternateGrid from "../AlternateGrid";
function Secondary() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  const contents = [
    {
      image: Secondary1,
      dimension: {
        x: "400",
        y: "250",
      },
      desc: [
        "The students are strengthened in cognitive and critical learning by analyzing concepts of science, social science and math. Discursive learning happens with project based and explore hands on activities to perceive concepts clearly. The scientific temper and self-expressions promotes self-reliance, productive work, intellectual development and practical skills. Students examine specimens, illustrate experiments for practical understanding and presentations using softwares like PPT to explain learnt concepts. Field visits, surveys, questionnaires help them to have a depth of concept acquisition. The scheduled consistent assessments and teaching help to further strengthen in cognitive areas of science and social science. Practice sheets and more explanation through math findings using equipments in math lab help to understand the logical sums. The LSRW skills are focused through more listening podcasts, practice grammar worksheets.",
      ],
    },
    {
      image: Secondary2,
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
        <Typography
          style={{ fontFamily: "Times new roman" }}
          variant="h2"
          className="header"
        >
          Secondary
        </Typography>
      </div>
      <div>
        {contents.map((content, i) => {
          return (
            <AlternateGrid key={i} direction={i % 2 === 0} content={content} />
          );
        })}
      </div>
    </div>
  );
}

export default Secondary;
