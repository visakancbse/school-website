import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../../css/style.css";

function ShowImages() {
  const history = useHistory();
  const [folder, setFolder] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    let location = window.location.toString();
    setFolder(location.replace("http://localhost:3000/gallery/", ""));
  }, []);
  useEffect(() => {
    const loadImage = (imageName) => {
      import(`./${folder}/${imageName}.JPG`)
        .then((img) => {
          console.log(img?.default);
          setImage(img);
        })
        .catch((e) => {
          console.log(e);
          history.push("/error");
        });
    };
    if (folder !== null) {
      loadImage("outdoor1");
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

      {folder && <img src={image} alt="outdoor1" />}
    </div>
  );
}

export default ShowImages;
