import React from "react";
import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";

const Inicio = () => {
  return (
    <div className="mainSection">
      <h1 className="display-1 fw-lighter text-center">Bienvenidos</h1>
      <hr />
      <Container>
        <Row>
          <CardProducto></CardProducto>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
