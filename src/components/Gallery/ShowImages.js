import { Dialog, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../../css/style.css";
import { AllImages } from "./FetchGallery";
import "./gallery.css";

function ShowImages() {
  const history = useHistory();
  const [folder, setFolder] = useState(null);
  const [images, setImages] = useState(null);
  useEffect(() => {
    let location = window.location.toString();
    setFolder(location.replace("http://localhost:3000/gallery/", ""));
  }, []);
  useEffect(() => {
    if (folder !== null) {
      let imgs = AllImages[`${folder}`];
      if (imgs) {
        setImages(imgs);
      } else {
        history.push("/error");
      }
    }
  }, [folder, history]);

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography
          style={{ fontFamily: "Times New Roman" }}
          variant="h2"
          className="header"
        >
          {folder}
        </Typography>
      </div>
      <div className="gallery">
        {images &&
          images.map((img, i) => (
            <ImageComponent image={img} alt={i} key={i} />
          ))}
      </div>
    </div>
  );
}

const ImageComponent = ({ image, alt }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="image-display" style={{ cursor: "pointer" }}>
      <img
        width="100%"
        height="100%"
        src={image}
        alt={`gallery${alt}`}
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <img width="100%" height="100%" src={image} alt={`gallery${alt}`} />
      </Dialog>
    </div>
  );
};
export default ShowImages;
