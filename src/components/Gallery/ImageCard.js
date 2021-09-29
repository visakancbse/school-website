// import { FolderOpen } from '@mui/icons-material'
import React from "react";
import "./gallery.css";

function ImageCard({ content }) {
  const { image, count, name } = content;
  return (
    <div style={{padding:'2%'}}>
      {/* <div className="folder">
                <FolderOpen className="icon"/>
            </div> */}
      <div className="image-card">
        <img src={image} alt={count} />

        <h2>{name}</h2>

        <p>{`${count} photos`}</p>
      </div>
    </div>
  );
}

export default ImageCard;
