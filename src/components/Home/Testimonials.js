import React from "react";
import "./css/testimonials.css";
function Testimonials({ testimonial, ...props }) {
  const { statement, name } = testimonial;
  return (
    <div>
      <div className="testimonial">
        <h3>TESTIMONIAL</h3>
        <h1>What Parents say,</h1>
        <p>
          <i>{statement}</i>
        </p>
        <h5>{name}</h5>
        {/* <h6>{who}</h6> */}
      </div>
    </div>
  );
}

export default Testimonials;
