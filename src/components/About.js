import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import "../css/style.css";
import School from "../images/school.jpg";
import Principal from "../images/principal.jfif";
import Correspondent from "../images/correspondent.JPG";
import AboutImg from "../images/visakan-school-about-image.jpg";
import AlternateGrid from "./AlternateGrid";
function About() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);

  const contents = [
    {
      image: Correspondent,
      dimension: {
        x: "400",
        y: "250",
      },
      title: "Correspondent",
      desc: [
        "Here at Visakan, we have a warm and welcoming learning community, committed to creating to best possible educational experience for every child. We aim to enable all children to reach their u potential. We have talented, dedicated, caring staff, each of whom works very hard to ensure that the talents and abilities of the children in our care are nurtured and carefully developed. Our teachers are highly skilled and experienced, and work as a team to make the school a very special place, every day, for your child. We aim to provide a broad, well-balanced and relevant curriculum. The children here are listened to and have regular opportunities to express themselves-for example through class discussion and the School Council. We act on children's views to make our school a place that children value and one that they want to come to. Our school is housed in an amazing building and offer world-class learning facilities for children and teachers. We look forward to working with you as partners in your child's education. Wishing you all the very best.",
      ],
    },
    {
      image: Principal,
      dimension: {
        x: "250",
        y: "500",
      },
      title: "Principal",
      desc: [
        "With over 20 years of experience in the field of education, Dr.Manjula has devoted much of her life in educating the next generation. She has specialised in areas of education that are essential in guiding the kids onto a better future. Dr.Manjula has also received various awards and accolades over the years for her contribution to the field.",
      ],
    },
  ];

  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography variant="h2" className="header">
          About Us
        </Typography>
      </div>
      <div className="grid-content">
        <div style={{ textAlign: "center" }}>
          <img
            style={{ margin: "auto" }}
            height="250"
            width="400"
            className="float-r"
            src={School}
            alt="school"
          />
        </div>
        <div>
          <p>
            Visakan Charitable Trust is formed in the name of our Founder
            Mr.M.Visakan B.E.M.B.A who was the visionary to start an educational
            institution which would equip the students to be the leaders of
            tomorrow and to face the challenges of this changing global
            community. The Chairman of Visakan School is Mr.M.Manoharan B.A., He
            is also working and giving their social activities via, Sri Visakan
            Charitable Trust at Madurai, Indian Oil Dealer at Madurai, India
            Match Factory at Kovilpatti, and Visakan Thirumana Mandapam at
            Kovilpatti. The Correspondent of Visakan School is Mrs.Baghirathy
            Manoharan M.Sc., She is providing their outsource in Vijay Gas at
            Madurai, India Lubricants at Madurai, and M.Visakan Public Welfare
            Maternity Hospital at Kovilpatti. The management is doing yeomen
            service to the society for the past 25 years by running the
            educational institutions, Hospital and other corporate sectors. The
            main objective of this school is to give an all-round and quality
            education in CBSE curriculum to the children in and around Madurai.
          </p>
        </div>
      </div>
      <div style={{ display: "block" }}>
        {contents.map((content, i) => {
          return (
            <AlternateGrid key={i} direction={i % 2 === 0} content={content} />
          );
        })}
      </div>
      <div className="grid-content">
        <div>
          <h4>Vision</h4>
          <p>
            To be an institution of excellence where exploration, creativity and
            imagination make learning exciting and learners equip themselves to
            be a global citizen.
          </p>
          <h4>Mission</h4>
          <p>
            Visakan School with an efficient team of staff members provide an
            optimum learning environment in which each student discovers &
            realizes his full potential to become self- directed, vibrant,
            lifelong learners to lead productive lives and to become
            contributing members of the global community.
          </p>
        </div>
        <div style={{ textAlign: "center" }}>
          <img style={{ margin: "auto" }} className="float-r" src={AboutImg} alt="school" />
        </div>
      </div>
    </div>
  );
}

export default About;
