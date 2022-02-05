import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h4>Wyszukiwarka filmów</h4>
          </Col>
          <Col>
            Aplikacja gr 3 zrealizowana na przedmiocie Wykorzystanie wzorców w
            technologiach internetowych
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
