import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/Recurso1.svg";
import emailjs from "emailjs-com";

const Contact = () => {
  function enviarEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0nnnwsx",
        "template_j06esi8",
        e.target,
        "tdP3-KABcWO1E-D4W"
      )
      .then((res) => {
        alert("Se ha enviado correctamente");
        console.log(res);
      });
  }
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={enviarEmail} style={{ position: "relative" }}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    id="firstname"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    id="lastname"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="N° Phone"
                    name="phone"
                    id="phone"
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    placeholder="Message"
                    name="message"
                    id="message"
                  ></textarea>
                  <button type="submit">
                    <span>Enviar</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
