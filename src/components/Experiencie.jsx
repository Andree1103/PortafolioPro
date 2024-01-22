import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CTOnline from "../assets/img/ctoexp.svg";
import CstiCorp from "../assets/img/logocsti.svg";

const Experiencie = () => {
  return (
    <section className="Experience">
      <Container id="experience">
        <Row className="aling-items-center" style={{ marginBottom: "65px" }}>
          <h2 className="exp-h2">Experiencia Laboral</h2>
          <div className="experience-div">
            <div className="exp-div">
              <h4 className="exp-h4">Csti Corp</h4>
              <p className="exp-h4">
                En el marco de mi formación académica en CSTI, llevé a cabo mis
                prácticas en el campo de la computación e informática, empleando
                Spring Boot y microservicios. Durante este período, tuve la
                oportunidad de perfeccionar mis habilidades en el desarrollo
                FullStack, haciendo uso de las tecnologías Java y Angular.
                Asimismo, adquirí conocimientos en el despliegue utilizando SAP
                Hana.
              </p>
              <div>
                <span>
                  <b>Desde:</b>
                </span>
                <p>Enero 2023 - Marzo 2023</p>
              </div>
            </div>
            <div className="exp-div">
              <h4 className="exp-h4">Continental Travel</h4>
              <p className="exp-h4">
                En la actualidad, trabajo como programador Full Stack en
                Continental Travel, utilizando tecnologías como C#, JavaScript y
                SQL Server. Mi experiencia en la empresa ha sido una oportunidad
                para un sólido desarrollo profesional y continuo aprendizaje.
                Contribuyo activamente al éxito de los proyectos, manteniéndome
                actualizado en las últimas tendencias tecnológicas. Mi enfoque
                se centra en la excelencia y la innovación, aportando de manera
                proactiva al crecimiento y eficiencia de Continental Travel.
              </p>
              <div>
                <span>
                  <b>Desde:</b>
                </span>
                <p>Marzo 2023 - Actualidad 2024</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Experiencie;
