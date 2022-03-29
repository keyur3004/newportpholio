import React, { useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
// import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";
// import charusat from "../../Assets/charusat.png";
// import noble from "../../Assets/noble.png";
// import alpha from "../../Assets/alpha2.png";
// import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';  
import Data from "./Data.js";
import JobTab from "./Tab/JobTab";
import Aos from "aos";
import "aos/dist/aos.css";

function Experience() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
}, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <span className="dark">My </span><strong className="white">Experience </strong>
        </h1>
        <p className="dark">
          {/* Here are my <span className="white"> education </span> details */}
          Where I have <span className="white"> Worked </span>
        </p>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card dark">
            <ExperienceCards
              imgPath={charusat}
              isBlog={false}
              // title="Charotar University of Science And Technology"
              title="CHARUSAT University"
              description="BTech | Computer Engineering"
              description2="2017 - 2020 | Anand"
              // description3="CGPA : 6.54"
              link="https://charusat.ac.in"
            />
          </Col>

          <Col md={4} className="project-card" >
            <ExperienceCards
              imgPath={noble}
              isBlog={false}
              title="Noble Group of Institutions"
              description="Diploma | Computer Engineering"
              description2="2014 - 2017 | Junagadh"
              // description3="CGPA : 8.44"
              link="https://ngivbt.edu.in"
            />
          </Col>

          <Col md={4} className="project-card" >
            <ExperienceCards
              imgPath={alpha}
              isBlog={false}
              title="Alpha High School"
              description2="2012 - 2014 | Junagadh"
              // description3="CGPA : 6.88"
              description="Secondary & Higher Secondary"
            //   link="https://charusat.ac.in"
            />
          </Col>

        </Row> */}<div data-aos="zoom-in" data-aos-easing="ease">
        <JobTab data={Data.jobs} /></div>
      </Container>
    </Container>
  );
}

export default Experience;
