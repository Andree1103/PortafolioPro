import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/Recurso2.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { IntlProvider, FormattedMessage } from "react-intl";
import MensajesIngles from "../lang/en-US.json";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Desarrollador Web",
    "Desarrollador Movil",
    "Analista de Sistema",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <IntlProvider locale="en-US" messages={MensajesIngles}>
      <section>
        <Container className="banner" id="home">
          <Row className="aling-items-center">
            <Col xs={12} md={6} xl={7} style={{ paddingBottom: "35px" }}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">
                      <FormattedMessage id="app.welcome" defaultMessage="Gaa" />
                    </span>
                    <h1>
                      {`Jarol Andree`} <span className="wrap">{text}</span>
                    </h1>
                    <p>
                      <FormattedMessage
                        id="app.presentation"
                        defaultMessage="Gaa"
                      />
                    </p>
                    <a
                      href="https://www.docdroid.net/N4DFVNV/cvpro10-pdf"
                      target="_blank"
                    >
                      Descargar CV
                      <ArrowRightCircle size={25} />
                    </a>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Headder img" />
            </Col>
          </Row>
        </Container>
      </section>
    </IntlProvider>
  );
};

export default Banner;
