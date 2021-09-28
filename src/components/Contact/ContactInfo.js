import React from "react";
import '../../css/footer.css'
function ContactInfo() {
  return (
    <div style={{color:"white"}}>
      <h3>Address</h3>
      <a
        className="a-down"
        target="_blank"
        rel="noreferrer"
        href="https://www.google.com/maps/place/Visakan+School+(CBSE+)/@9.8968874,78.0883081,17z/data=!3m1!4b1!4m5!3m4!1s0x3b00cf96437788ff:0x1f18ae9d36f2eca4!8m2!3d9.8968821!4d78.0904968"
      >
        Visakan School, Alagusundaram Nagar, Bykkara, Madurai - 625004
      </a>
      <h3>Phone Number:</h3>
      <a href="tel:0452-2693886" className="a-down">
        0452 - 2693886
      </a>
      ,{" "}
      <a href="tel:+918870936402" className="a-down">
        +91 88709 36402
      </a>
      <h3>Email:</h3>
      <a
        className="a-down"
        target="blank"
        rel="noreferrer"
        href="mailto:visakanschool@gmail.com"
      >
        visakanschool@gmail.com
      </a>
    </div>
  );
}

export default ContactInfo;
