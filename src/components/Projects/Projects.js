import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
}, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <span className="dark">My Recent</span><strong className="white"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          <span className="dark"> Here are some  <span className="white">projects</span> I've worked on recently.</span>
        </p>
        <Row style={{ justifyContent: "center", paddingTop: "27px", paddingBottom: "10px" }}>
          <Col md={6} className="project-card" data-aos="fade-up" data-aos-easing="ease">
            <ProjectCard
              isBlog={false}
              title="ResumeKeywords"
              description="ResumeKeywords helps tailor your resume to individual job postings using AI and NLP."
              description2="React StyledComponents RestAPI Python"
              link="https://github.com/abhiapatel/ResumeKeywords"
            />
          </Col>

          <Col md={6} className="project-card" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease">
            <ProjectCard
              isBlog={false}
              title="PMKUSUM"
              description=" A goverment project for Gujarat State Level Solar Energy Data Management. "
              description2="Javascript Bootsrap HTML CSS"
              link="https://pmkusum.guvnl.com"
            />
          </Col>

          <Col md={6} className="project-card" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease">
            <ProjectCard
              isBlog={false}
              title="Court case management"
              description="A court case management software that has facility to record information like adding a case, adding lawyers (have facility select from existing list of lawyers), send invoice for each hearing. In short, the system provides end to end management of court case from client perspective and is easy to use."
              description2="React Bootsrap HTML TailwindCSS"
              link="https://github.com/abhiapatel/court-case-management-project"
            />
          </Col>

          <Col md={6} className="project-card" data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease">
            <ProjectCard
              isBlog={false}
              title="Course-tip"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              description2="React Bootsrap HTML CSS"
              link="https://github.com/abhiapatel/Course-tip"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
