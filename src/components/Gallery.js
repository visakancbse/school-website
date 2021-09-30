import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import "../css/style.css";
import ImageCard from "./Gallery/ImageCard";
import { GalleryContent } from "./Gallery/GalleryContent";

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
      <div style={{ textAlign: "center",padding:'1%' }}>
        <a
          style={{ textDecoration: "none" }}
          href="https://drive.google.com/drive/folders/1nkpu1uk4OqIl_-Mls4NNdu1Xs1zTe_Nu"
          target="blank"
        >
          <Button style={{ backgroundColor: "#f44336", color: "aliceblue" }}>
            View more
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Gallery;
