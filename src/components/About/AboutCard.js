import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Joebeck Andrew F. Gusi</span>{" "}
            from <span className="purple">Sampaloc, Manila</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Frontend Developer</span> at{" "}
            <span className="purple">8box Solutions Inc.</span>
            <br />I'm currently a 4th year{" "}
            <span className="purple">Computer Engineering</span> student at{" "}
            <span className="purple">Polytechnic University of the Philippines (PUP)</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            entertained and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies & Series 🎬
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "When will you know you're ready, you won't it's a leap of faith."{" "}
          </p>
          <footer className="blockquote-footer">Miles Morales</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
