import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Frontend Developer and Computer Engineering student who loves
              creating engaging user experiences and bringing ideas to life through code.
              I'm passionate about learning new technologies and continuously improving my skills.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Python, HTML, CSS, and C++/C#{" "}
                </b>
              </i>
              — and I work with modern tools and frameworks.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Web Development, AI, and Mobile Apps{" "}
                </b>
              </i>
              — always eager to explore emerging technologies.
              <br />
              <br />
              I love building projects with
              <b className="purple"> Node.js, React.js, </b>
              and styling with{" "}
              <i>
                <b className="purple">Tailwind CSS</b> and{" "}
                <b className="purple">Material UI</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
