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
import imgquickstop from "../assets/img/quickstopjava.png";
import imgquickstop2 from "../assets/img/moduloventajava.png";
import imgapiclinicac from "../assets/img/apiClinicaC.png";
import imgnotasreact from "../assets/img/cnotas.png";
import imgcl3c from "../assets/img/cl3C.png";
import imgcrudc from "../assets/img/crudcreact.png";
import ecommercec from "../assets/img/ecommercec.png";
import tiendavirtualcl2c from "../assets/img/teindavirtuacl2c.png";
import QuickStopcc from "../assets/img/quickstopCC.png";
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
    {
      title: "QuickStop",
      description:
        "Modulo de Ventas realizado utilizando SpringBoot que me permitiria tener un mejor control de mi negocio, ademas me permitira generar ventas y esta protegido por SpringSecurity.",
      imgUrl: imgquickstop,
      URL: "https://github.com/Andree1103/Spring_quickstop",
    },
    {
      title: "Modulo de Ventas",
      description:
        "Tienda virtual realizada utilizando SpringBoot que me permitiria tener un mejor control de mi negocio, ademas me permitira generar ventas y esta protegido por SpringSecurity.",
      imgUrl: imgquickstop2,
      URL: "https://github.com/Andree1103/ProyectoDawi",
    },
  ];
  const NodePro = [
    {
      title: "Api de clinica",
      description:
        "Una api realizada en .netCore6.0 que me permitira agregar, editar, listar y eliminar citas de mi BD.",
      imgUrl: imgapiclinicac,
      URL: "https://github.com/Andree1103/APIClinica-Net6.0",
    },
    {
      title: "Notas React",
      description:
        "Una aplicacion web realizada con reactJs y .netcore que me permite agregar notas y eliminarlas.",
      imgUrl: imgnotasreact,
      URL: "https://github.com/Andree1103/slnReactNotas",
    },
    {
      title: "Crud React + .NET",
      description: "Un crud sencillo realizado en .netcore6.0 y reactJS",
      imgUrl: imgcrudc,
      URL: "https://github.com/Andree1103/CrudReact.NET6",
    },
    {
      title: "Dar de Baja producto",
      description:
        "Aplicacion que me permite dar de baja a mi producto seleccionado cambiandolo de estado logicamente y ademas me crea una nueva tabla con los productos de BAJA",
      imgUrl: imgcl3c,
      URL: "https://github.com/Andree1103/DardeBajaC-NET6",
    },
    {
      title: "Ecommerce",
      description:
        "Ecommerce que me permite registrar ventas, mirar mis ventas, registrarme, loguearme etc. Realizado en .netcore6.0 utilizando el modelo MVC.",
      imgUrl: ecommercec,
      URL: "https://github.com/Andree1103/SistemaInventario6",
    },
    {
      title: "Carrito Local",
      description:
        "Programa web que me añade mi producto a un carrito de manera local.",
      imgUrl: tiendavirtualcl2c,
      URL: "https://github.com/Andree1103/TiendaVirtualMOdel1",
    },
    {
      title: "Tienda virtual",
      description:
        "Tienda virtual realizada en NETCORE6 utilizando capas además con roles y utilizando el modelo MVC",
      imgUrl: QuickStopcc,
      URL: "https://github.com/Andree1103/Quickstop.netcore6",
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
                  <h2>Proyectos</h2>
                  <p>
                    Estos son algunos de mis proyectos que he realizado a lo
                    largo de tiempo, que he mejorado continuamente.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">JavaScript</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Java</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">C#</Nav.Link>
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
