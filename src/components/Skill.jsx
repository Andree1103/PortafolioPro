import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import javasvg from "../assets/img/java.svg";
import jss from "../assets/img/js.svg";
import reactsvg from "../assets/img/react-2.svg";
import spring from "../assets/img/spring.svg";
import nodejssvg from "../assets/img/nodejs-icon.svg";
import kotlin from "../assets/img/kotlin-1.svg";
import c from "../assets/img/c.svg";
import visual from "../assets/img/visual-studio.svg";
import sqlsvg from "../assets/img/mysql-3.svg";
import postgresvg from "../assets/img/postgresql.svg";
import ibm from "../assets/img/ibm.svg";

const Skill = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx" id="skills">
              <h2>Skills</h2>
              <p>
                Programming languages ​​and systems that I have been learning
                and mastering through my experience working on different
                projects. I also master additional topics which I could not put
                but you can see without any problem by downloading my cv in the
                link above.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <img
                    src={jss}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <img
                    src={reactsvg}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <img
                    src={nodejssvg}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>NodeJs</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Image" />
                  <img
                    src={javasvg}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <img
                    src={spring}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>Spring</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <img
                    src={kotlin}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>Kotlin</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <img
                    src={c}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <img
                    src={visual}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>Visual Studio</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <img
                    src={ibm}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>IBM Rational Architect and Rhapsody</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <img
                    src={postgresvg}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <img
                    src={sqlsvg}
                    alt=""
                    className="skillimg"
                    style={{ width: "35px" }}
                  />
                  <h5>MySql</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skill;
