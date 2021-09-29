// import { FolderOpen } from '@mui/icons-material'
import React from "react";
import { useHistory } from "react-router";
import "./gallery.css";

function ImageCard({ content }) {
  const { image, count, name ,link} = content;
  const history=useHistory()
  return (
    <div onClick={()=>history.push(`/gallery${link}`)} style={{padding:'2%'}}>
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
