import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import "../css/style.css";
import Sports from "../images/sports.jpg";
import Candle from "../images/candle.jpg";
// import Extra from "../images/extra.jpg";
import Lab from "../images/lab.JPG";
import AudioVisual from "../images/auditorium.JPG";
import Auditorium from "../images/auditorium.JPG";
import Library from "../images/library.JPG";
import Social from "../images/social.jpg";

function Infrastructure() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  return (
    <div>
      <div style={{ overflow: "hidden" }}>
        <Typography style={{fontFamily:'Times new roman'}} variant="h2" className="header">
          Infrastructure
        </Typography>
      </div>
      <div className="grid-content">
        <div>
          <h2 className="content">At Visakan School</h2>
          <p className="content">
            {" "}
            Education plays the most important role in acquiring professional
            and social skills and a positive attitude to face the challenges of
            life. Curriculum is a comprehensive plan of any educational
            programme. VISAKAN is a school where teaching is not about knowledge
            downloads, but fostering excellence. The school believes in opening
            the minds of pupils. It signifies the emergence of a fresh thought
            process in imparting a curriculum which would restore the
            independence of the learner to pursue the learning process in
            harmony with the existing personal, social and cultural eths. Thus,
            students are guided to learn by doing, stressing on the all-round
            development of a Child’s personality.
          </p>
        </div>
        <div>
          <img className="float-r" src={Candle} alt="Loading..." />
        </div>
      </div>
      <div className="grid-content">
        <div>
          <img className="float-r" src={Sports} alt="Loading..." />
        </div>
        <div>
          <h2 className="content">Sports and Co-Curricular activities:</h2>
          <p className="content">
            {" "}
            All students are strongly encouraged to participate in sports and
            cultural activities. We encourage this participation of students, as
            we believe that student’s educational and social experiences are
            enhanced by their involvement in the wide range of activities
            offered by the school. We celebrate our student’s participation at
            every level. By participating in sports & co-curricular activities
            our students develop leadership, tolerance, performance skills,
            presentation skills, cultural awareness & understanding goal setting
            strategies, physical awareness, confidence, co-operation,
            commitment, team spirit and friendship.
          </p>
          <h4>Sports activities offered:</h4>
          <p>Table tennis, shuttle, carromboard, other outdoor games.</p>

          <h4>Co-Curricular activities:</h4>
          <p>
            Vocal, dance, karate, skating, traditional games, gymnastics,
            keyboard, art & craft, storytelling etc.,
          </p>
        </div>
      </div>
      <div className="grid-content">
        <div>
          <h2>SUPW (SOCIALLY USEFUL PRODUCTIVE WORK) I-VII Std:</h2>
          <p>
            SUPW is another learning area falling under the domain
            ‘Co-Scholastic’. This curriculum is intended to lend opportunities
            to students to explore and assess their abilities and aptitude on
            varieties of life related skills and knowledge. It also offers
            opportunities for students to develop better understanding of their
            social and environmental issues. The school would ensure that
            students are encouraged to take up varieties of activities, which
            are productive and useful for the school and the community such as,
            calligraphy, candle making, recycling the waste materials,
            electrical gadgets, craft and clay work. Fabric & glass painting,
            Jewellery making, mehandhi & rangoli, origami soft toys, gardening,
            drawing weaving activity, best out of waste ( old newspaper, basket)
            needle work. Block printing envelops making, cooking, macrome wall
            painting, and tie-dye.
          </p>
        </div>
        <div>
          <img className="float-r" src={Social} alt="Loading..." />
        </div>
      </div>
      <div className="grid-content">
        <div>
          <img
            className="float-r"
            height="250"
            width="400"
            src={Library}
            alt="Loading..."
          />
        </div>
        <div>
          <h2>Library:</h2>
          <p>
            VISAKAN library stocks fiction, nonfiction, encyclopedias, comics
            covering a wide range of subjects across all ages. Students get to
            take home a book every week in order to foster love for reading in
            them. If the library book was lost by students, the fine or the book
            price will be collected or student can replace the same book. If the
            library card is missed fine of Rs.25/- is collected.
          </p>
        </div>
      </div>
      <div className="grid-content">
        <div>
          <h2>Science Laboratory:</h2>
          <p>
            Is fully equipped as per the guidelines laid by CBSE. These labs
            facilitate firsthand experience of learning different concepts of
            science and in developing scientific reasoning through experiments.
            Science lab experiments and equipments aid in developing scientific
            learning among students in cultivating deeper and profound interest
            in the subject. This is line with our philosophy of learning by
            doing.
          </p>
        </div>
        <div>
          <img
            className="float-r"
            height="250"
            width="400"
            src={Lab}
            alt="Loading..."
          />
        </div>
      </div>
      <div className="grid-content">
        <div>
          <img
            className="float-r"
            height="250"
            width="400"
            src={Auditorium}
            alt="Loading..."
          />
        </div>
        <div>
          <h2>Auditorium:</h2>
          <p>
            The open air theater is the place where children exhibit their
            oratory skills and talent for acting. This artistically build
            auditorium is a platform for building children to perform in front
            of large audience.
          </p>
        </div>
      </div>
      <div className="grid-content">
        <div>
          <h2>Audio Visual Room:</h2>
          <p>
            All students are given compulsory AV period 1 per week where they
            are shown visuals, related to their subjects, non academic issues,
            current affairs and children movies etc., which helps to enhance
            their vocabulary modulation and pronunciation.
          </p>
        </div>
        <div>
          <img
            className="float-r"
            height="250"
            width="400"
            src={AudioVisual}
            alt="Loading..."
          />
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "1%" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ACHYjrA3wio"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Infrastructure;
