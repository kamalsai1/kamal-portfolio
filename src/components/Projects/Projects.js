import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              isComplete={true}
              title="Pack Ur Bags"
              description="This website is a one-stop destination for family package tours. The goal of this website is to ensure a hassle-free and enjoyable travel experience for customers."
              ghLink="https://github.com/kamalsai1/PackUrBags"
              demoLink="https://frontend-packurbags.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isComplete={false}
              title="Legal Statute Identification"
              description="This is an ongoing project which involves prediction of section according to Indian penal code. The
              prediction task is done using deep learning techniques(Transformers, Attention mechanism, BiGRU)"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isComplete={true}
              title="Employee Record Mainatainance"
              description="This is a mini project which involves maintaining employee records using a database. The project focusses on how to use OOP for performing CRUD operations."
              ghLink="https://github.com/kamalsai1/OOP-MINI-PROJECT"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isComplete={true}
              title="Food Delivery Application"
              description="A basic web application that allows users to order food from restaurants.
              It offers a streamlined experience for users who want to enjoy a convenient meal without the need to visit a restaurant physically.
               The application is built using ReactJS and NodeJS. "
              ghLink="https://github.com/kamalsai1/food-delivery-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
