import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import UpScroll from "./utils/UpScroll";
import SectionHeader from "./utils/SectionHeader";
import cv from "../assets/devinyounge.pdf";

const Contact = () => {
  return (
    <Container
      id="contact"
      className="pt-5 pb-3 d-flex flex-column section-container"
      fluid
      style={{ maxWidth: "1000px" }}
    >
      <SectionHeader title={"Get in Touch!"} />
      <Row className="pt-3 justify-content-center">
        <Col xs={2} sm={1} className="d-flex justify-content-center">
          <a
            className="text-dark contact-icon"
            href="mailto:devin1younge@gmail.com"
          >
            <FaEnvelope size={30} className="nav-link" />
          </a>
        </Col>
        <Col xs={2} sm={1} className="d-flex justify-content-center">
          <a
            href="https://linkedin.com/in/devinyounge"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} className="nav-link" />
          </a>
        </Col>
        <Col xs={2} sm={1} className="d-flex justify-content-center">
          <a
            href="https://github.com/piratechnics"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} className="nav-link" />
          </a>
        </Col>
        <Col xs={2} sm={1} className="d-flex justify-content-center">
          <a
            href="https://twitter.com/piratechnics"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={30} className="nav-link" />
          </a>
        </Col>
        <Col xs={2} sm={1} className="d-flex justify-content-center">
          <a
            href="https://instagram.com/piratechnics"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} className="nav-link" />
          </a>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <label className="fs-5">
            TL;DR? grab my resume here <FaArrowRight />
          </label>
          <a href={cv} download="Devin-Younge-CV" target="_blank">
            <Button variant="success" className="mx-3">
              Download PDF
            </Button>
          </a>
        </Col>
      </Row>
      <UpScroll navLink={"#top"} />
      <Row className="mt-5 justify-content-center">
        &copy; {new Date().getFullYear()} Devin Younge
      </Row>
    </Container>
  );
};

export default Contact;
