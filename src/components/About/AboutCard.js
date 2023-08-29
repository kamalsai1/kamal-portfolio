import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kamal sai Yalamarthi </span>
            from <span className="purple"> Kakinada, AP, India.</span>
            <br /> 
            <br />
            I'm a passionate Computer Science undergrad with a burning curiosity towards technology and development. 
            <br />My journey into the world of programming began with the fascinating realms of web development and quickly evolved into a profound interest in the power of deep learning. 
            <br /><br />From crafting seamless MERN stack applications to diving headfirst into the complexities of neural networks, I've found my sweet spot at the intersection of creative web solutions and cutting-edge AI.
            <br />
            <br />   
             I worked as an <span className="purple">intern</span> at National Taipei University of Technology, Taiwan
              where I tried to developed a deep learning model for <span className="purple">voice command classifier</span> that can seemlessly work on edge devices like raspberry Pi and jetson Nano.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
