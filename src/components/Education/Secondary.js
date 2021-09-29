import React, { useEffect } from "react";
import { Typography } from "@mui/material";

import "../../css/style.css";
function Secondary() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  // const contents = [
  //   {
  //     image: Primary1,
  //     dimension: {
  //       x: "400",
  //       y: "250",
  //     },
  //     desc: [
  //       "The learning strategies in Primary classes are designed to enthuse students into academic inquisitiveness, learn responsibility and grow into a structural phase of learning. The specific areas of learning include languages, mathematics, science, social science, computer science, art and physical education. The holistic learning fosters culture sensitivity to grow socially responsible with strong communication skills for grooming into a confident and an avid learner.",
  //       "The reading and speaking skills is honed through reading activities that instigates thinking, imagination and analysis. Individual and peer group activities encourages for development of writing and speaking activities. Learning tabs serve individual access to enhance LSRW skills. Phonological learning assists in easy spelling of words and reading.",
  //     ],
  //   },
  // ];
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography variant="h2" className="header">
          Secondary
        </Typography>
      </div>
    </div>
  );
}

export default Secondary;
