import React from "react";
import { Col } from "react-bootstrap";

const ProjectCards = ({ title, description, imgUrl, URL }) => {
  return (
    <Col sm={8} md={4} style={{ justifyContent: "center" }}>
      <div className="proj-imgbx">
        <a href={URL} style={{ color: "white" }} target="_blank">
          <img src={imgUrl} alt="IMG not Found" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCards;
