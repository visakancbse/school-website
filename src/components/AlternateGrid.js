import React from "react";
import "../css/style.css";

function AlternateGrid({ direction, content, ...props }) {

  if (direction) {
    return (
      <div className="grid-content">
        <Para content={content} />
        <Image content={content} />
      </div>
    );
  }
  return (
    <div className="grid-content">
      <Image content={content} />

      <Para content={content} />
    </div>
  );
}

const Image = ({ content }) => {
  const { image, dimension,desc } = content;
  return (
    <div>
      <img
        className="float-r"
        height={dimension.y}
        width={dimension.x}
        src={image}
        alt={desc}
      />
    </div>
  );
};
const Para = ({ content }) => {
  const { desc,title } = content;

  return (
    <div>
        {title&&<h1>{title}</h1>}
      {desc?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
};
export default AlternateGrid;
