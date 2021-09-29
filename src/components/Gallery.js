import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "../css/style.css";
import ImageCard from "./Gallery/ImageCard";
import {GalleryContent} from "./Gallery/GalleryContent";

function Gallery() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography
          style={{ fontFamily: "Times New Roman" }}
          variant="h2"
          className="header"
        >
          Gallery
        </Typography>
      </div>
      <div className="gallery">
        {GalleryContent.map((content, i) => (
          <ImageCard key={i} content={content} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
