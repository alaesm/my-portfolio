import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import delyres from "../../Assets/Projects/delyres.png";
import taskeasy from "../../Assets/Projects/taskeasy.png";
import studx from  "../../Assets/Projects/studxAPP.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={delyres}
              isBlog={false}
              title="DELYRES - Food Buying and Selling App"
              description="DELYRES is a comprehensive application for buying and selling food. The app consists of 130 pages and communicates with a server using REST API for real-time data exchange. I implemented the MVVM architecture for a clean and scalable structure. My solution included developing both the user interface and backend integration, providing a smooth experience for buyers and sellers to interact and trade effectively."
              ghLink="https://github.com/soumyajit4419/Chatify"
        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studx}
              isBlog={false}
              title="STUDX Registration App"
              description="STUDX Registration App is Programmed for university club to manage student registrations. The app integrates REST API for real-time server communication, using Django as the backend. By following the MVVM architecture, I ensured the app was scalable and maintainable. The solution simplified the registration process for students and enabled club administrators to track members and events efficiently."
              ghLink="https://github.com/alaesm/StudX-App-Registration"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskeasy}
              isBlog={false}
              title="Taskesay - Task Management App"
              description="Taskesay is a task management application designed to help users manage tasks efficiently, even offline. I built this app using Room Database for offline data storage, ensuring all tasks are saved locally. The project follows the MVVM architecture to maintain clean and efficient code structure. My solution enables users to create, update, and organize tasks effortlessly, improving productivity even without internet access."
              ghLink="https://github.com/alaesm/TodoList-App"
                          
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
