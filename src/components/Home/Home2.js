import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
 
function Home2() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
}, []);

  return (
    <Container data-aos="fade-up" data-aos-easing="ease" fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="dark">Let me Introduce </span><span>MYSELF</span>
            </h1>
            <p className="home-about-body dark">
              {/* I fell in love with designing and I have at least learnt
              something, I think… 🤷‍♂️
              <br /> */}
              <br />I am working on classics like

              <span className="white courier"> React.jS, Javascript, HTML and CSS </span>

              <br />
              <br />
              My field of Interests are building new &nbsp;

              <span className="white courier">Web Technologies & UI/UX Design </span> and
              also in areas related to{" "}
              <span className="white courier">
                Development
              </span>

              <br />
              <br />
              Whenever possible, I also apply my passion in developing
              with <span className="white courier">Node.js</span> and

              <span className="white courier">
                {" "}
                Modern Javascript Library and Frameworks
              </span>

              &nbsp; like

              <span className="white courier"> React.js and Next.js</span>

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1> <span className="dark"> FIND </span><span className="white">ME</span><span className="dark"> ON </span></h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abhiapatel"
                  target="_blank"
                  rel="noreferrer"
                  className="gitHub home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhi-shobhashana-6b473618a"
                  target="_blank"
                  rel="noreferrer"
                  className="linkedIn home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:abhiashobhashana@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="envelope home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
            <p className="dark">
              Feel free to <span className="white">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
