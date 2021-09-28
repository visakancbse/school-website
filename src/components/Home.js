import React, { useEffect, useState } from "react";
import Bg1 from "../images/correspondent.JPG";
import Bg2 from "../images/slider-bg2.JPG";
import Bg3 from "../images/slider-bg3.JPG";
import Bg4 from "../images/slider-bg4.JPG";
import "../css/home.css";
import { Button, Typography } from "@mui/material";
import Standards from "./Home/Standards";
import UpcomingEvents from "./Home/UpcomingEvents";
import Testimonials from "./Home/Testimonials";
import About from "../images/about.jpg";
import School from "../images/school.jpg";
import Features from "./Home/Features";
import { useHistory } from "react-router";
function Home() {
  const history = useHistory();
  const images = [Bg1, Bg2, Bg3, Bg4];
  const [index, setIndex] = useState(1);
  const [display, setDisplay] = useState(images?.map((a, i) => i === 0));

  const testimonials = [
    {
      statement: "statement",
      name: "Mr.Name",
      who: "His father",
    },
  ];

  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
    const slideImage = () => {
      setIndex((i) => {
        setDisplay((d) => {
          return d.map((a, ai) => ai === i);
        });
        if (i < images.length - 1) {
          return i + 1;
        }
        return 0;
      });
    };

    const interval = setInterval(slideImage, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div>
      <div className="container">
        {images?.map((image, i) => {
          return (
            <div
              key={i}
              className={display[i] ? "image-slider" : "image-slider hide"}
            >
              <img className="image" src={image} alt="slider" />;
              <div className="overlay">
                <div className="overlay-content">
                  <Typography
                    style={{ fontFamily: "Times new roman" }}
                    variant="h2"
                  >
                    {" "}
                    Space To Learn ! Space To Grow..!
                  </Typography>
                  <p>Visakan School is </p>
                  <p>
                    "The School with different to give the Overall Development
                    for your child"
                  </p>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#f44336" }}
                    onClick={() => history.push("/application-form")}
                  >
                    Apply now
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Standards />
      <div className="grid-2">
        <div className="img">
          <img src={About} alt="school" />
        </div>
        <div>
          <h1 style={{ opacity: "0.8", textTransform: "uppercase" }}>
            About us
          </h1>
          <p style={{ opacity: "0.75" ,fontStyle:'italic'}}>
            At Visakan, we believe that each kid has their own and unique bunch
            of talents and we strive to make them better at it.
          </p>
          <p style={{ opacity: "0.75" ,fontStyle:'italic'}}>
            With teachers equipped to educate students in the best possible
            manner, parents can be rest assured that their children are in safe
            hands.
          </p>
          <p style={{ opacity: "0.75" ,fontStyle:'italic'}}>
            Visakan School follows the CBSE Syllabus through English medium. We
            provide education with an objective to empowering students to sit
            for the CBSE Board and train our students accordingly using the
            NCERT syllabi in the following subjects: Communicative English,
            Indian languages, Mathematics, Science, Social Science. Our school
            is equipped with the state-of-the-art classrooms and physical
            education facilities.
          </p>

          <div style={{ paddingBottom: "2%" }}>
            <Button
              variant="contained"
              style={{ backgroundColor: "#f44336" }}
              onClick={() => history.push("/about")}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <Features />
      <UpcomingEvents />
      <div className="grid-2 red-grad">
        <div className="img">
          <img src={School} alt="school" />
        </div>
        <div>
          <h1>Apply for admission</h1>
          <h3>Admissions open for Academic Year 2021 - 2022</h3>
          <p>
            We invite you to join our vision for your child’s future and en-roll
            for admissions by filling the online form. The offline admission
            forms can be collected from the Admin Office also.
          </p>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => history.push("/application-form")}
            className="jump"
          >
            Apply now
          </Button>
        </div>
      </div>
      <div style={{ padding: "1%" }}>
        {testimonials.map((t) => (
          <Testimonials key={t.name} testimonial={t} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Home;
