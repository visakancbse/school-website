import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "../../css/style.css";
import Primary1 from "./PrimaryImages/primary1.JPG";
import Primary2 from "./PrimaryImages/primary2.JPG";
import Primary3 from "./PrimaryImages/primary3.JPG";
// import Primary4 from "./PrimaryImages/primary4.JPG";
import AlternateGrid from "../AlternateGrid";
function Primary() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  const contents = [
    {
      image: Primary1,
      dimension: {
        x: "400",
        y: "250",
      },
      desc: [
        "The learning strategies in Primary classes are designed to enthuse students into academic inquisitiveness, learn responsibility and grow into a structural phase of learning. The specific areas of learning include languages, mathematics, science, social science, computer science, art and physical education. The holistic learning fosters culture sensitivity to grow socially responsible with strong communication skills for grooming into a confident and an avid learner.",
        "The reading and speaking skills is honed through reading activities that instigates thinking, imagination and analysis. Individual and peer group activities encourages for development of writing and speaking activities. Learning tabs serve individual access to enhance LSRW skills. Phonological learning assists in easy spelling of words and reading.",
      ],
    },
    {
      image: Primary2,
      dimension: {
        x: "400",
        y: "250",
      },
      title: "Programming Skills",
      desc: [
        "Students experience the computer operations and create own pages with the different uses of tools in MS word to draw, present power point presentations, and type assignements.",
      ],
    },
    {
      image: Primary3,
      dimension: {
        x: "400",
        y: "250",
      },
      title: "Montessori Learning",
      desc: [
      "The variety of Montessori tools like the pink tower with a set of ten blocks in increasing sizes, puzzles with making of a complete view of objects, Beads come in various sizes and arrangements, the knobbed cylinder blocks that are practice for three – finger grip for pencils, add clarity of concepts through sensorial learning and develops independent thinking."  
      ],
    },
  ];
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography
          style={{ fontFamily: "Times New Roman" }}
          variant="h2"
          className="header"
        >
          Primary
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

export default Primary;
