import React from "react";
import { Container, Row } from "react-bootstrap";
import Producto from "./producto/CardProducto";

const Inicio = () => {
  return (
    <div>
      <h1 className="display-1 fw-lighter text-center">Bienvenidos</h1>
      <hr />
      <Container>
        <Row>
          <Producto></Producto>
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
