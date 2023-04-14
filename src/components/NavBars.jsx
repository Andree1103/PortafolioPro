import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import logo from "../assets/Recurso1.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github-icon.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const NavBars = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "scrolled" : ""}
      style={{
        minHeight: "75px",
        gap: "1rem",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" style={{ fill: "white" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skill
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/andree-chiquis-06a4aa211/"
                target="_blank"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Andree1103" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.instagram.com/j11_andree/" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd">
              <Nav.Link
                href="#connect"
                onClick={() => onUpdateActiveLink("connect")}
                style={{ color: "white" }}
              >
                Go to Contact
              </Nav.Link>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBars;
