import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import ecomerce01 from "../assets/img/ecommerce1.0.png";
import ecomerce02 from "../assets/img/ecommerce2.0.png";
import pokedex from "../assets/img/pokedex.png";
import farmacia from "../assets/img/farmacia.png";
import tiendaACEE from "../assets/img/tiendaACEE.png";
import listado from "../assets/img/listado.png";
import rickandmorti from "../assets/img/RinckandMorty.png";
import frases from "../assets/img/frases.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import gitpng from "../assets/img/gitexample.png";

const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Elect",
      description:
        "Aplicacion que me permite listar, comprar y agregar al carrito, a la vez esta protegido por sus rutas. Trabajado en React",
      imgUrl: ecomerce02,
      URL: "https://ecommerceandreechi.netlify.app/",
    },
    {
      title: "Pokedex",
      description:
        "Aplicacion que me muestra todos los pokemones traidos por API'S. Trabajado en React ",
      imgUrl: pokedex,
      URL: "https://spiffy-kheer-9ed3a8.netlify.app/",
    },
    {
      title: "Rick and Morty",
      description:
        "Aplicacion que me muestra todos los personajes traidos por API'S. Trabajado en React ",
      imgUrl: rickandmorti,
      URL: "https://regal-mandazi-8e0f22.netlify.app/",
    },
    {
      title: "Ecommerce Virtual",
      description:
        "Aplicacion que me permite listar, comprar y agregar al carrito. Trabajado en HTML,CSS Y JS",
      imgUrl: ecomerce01,
      URL: "https://courageous-entremet-4675a1.netlify.app/",
    },
    {
      title: "List User",
      description:
        "Aplicacion que me permite registrar y resportar los usuarios interactuando con API. Trabajado en React",
      imgUrl: listado,
      URL: "https://lucky-nougat-539007.netlify.app/",
    },
    {
      title: "Frases",
      description:
        "Aplicacion que me trae frases de una API de forma aleatoria. Trabajado en React",
      imgUrl: frases,
      URL: "https://lucky-nougat-539007.netlify.app/",
    },
  ];
  const JavaPro = [
    {
      title: "Aplicacion Farmacia",
      description:
        "Aplicacion que me permite registar, reportar, listar y hacer transacciones. Trabajado en JAVA",
      imgUrl: farmacia,
      URL: "https://github.com/Andree1103/Aplicacion-Farmacia",
    },
    {
      title: "Ecommerce Virtual Java",
      description:
        "Aplicacion que me listar, comprar y hacer mantenimientos a los productos, clientes , proveedores utilizando Servlets,etc. Trabajado en JAVA",
      imgUrl: tiendaACEE,
      URL: "https://github.com/Andree1103/Tienda-Virtual-Java",
    },
  ];
  const NodePro = [
    {
      title: "Api ecommerce",
      description:
        "Api de ecommerce en el cual puedo agregar productos, registrar usuarios, carritos , compras , loging. Trabajada en NodeJs",
      imgUrl: gitpng,
      URL: "https://github.com/Andree1103/Final_Node23",
    },
    {
      title: "Chat Api",
      description:
        "Api que simula que me permite crear una conversación mensajes, añadir ususarios, respones mensajes. Trabajado en  NodeJs",
      imgUrl: gitpng,
      URL: "https://github.com/Andree1103/Entregable4.Node",
    },
    {
      title: "Forum Api",
      description:
        "Api de un foro que me permite crear posts por su categoria a la vez responder a los post. Trabajado en NodeJs",
      imgUrl: gitpng,
      URL: "https://github.com/Andree1103/forum_Api",
    },
    {
      title: "Restaurant Api",
      description:
        "Api hecha con sequelize-cli que me permite hacer un pedido, generar una orden, cambiar el estado de las mesas,etc. Trabajado en NodeJs",
      imgUrl: gitpng,
      URL: "https://github.com/Andree1103/Restaurant_API",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projecst</h2>
                  <p>
                    These are some of my projects that I have carried out over
                    time, which I have continuously improved.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab two</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab three</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row md="2" style={{ justifyContent: "center" }}>
                          {projects.map((project, index) => {
                            return <ProjectCards key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row md="2" style={{ justifyContent: "center" }}>
                          {JavaPro.map((java, index) => {
                            return <ProjectCards key={index} {...java} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row md="2" style={{ justifyContent: "center" }}>
                          {NodePro.map((node, index) => {
                            return <ProjectCards key={index} {...node} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
