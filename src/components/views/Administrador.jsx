import React from "react";
import { Container, Stack, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemTabla from "./producto/ItemTabla";

const Administrador = () => {
  return (
    <>
      <Container className="mainSection">
        <article className="d-flex align-items-center my-4">
          <Stack direction="horizontal" gap={3}>
            <h1 className="display-1 space fw-lighter">
              Productos Disponibles
            </h1>
          </Stack>
          <div className="ms-auto ">
            <Link
              className="btn btn-primary"
              to={"/administrar/crear"}
              size="lg"
            >
              Agregar
            </Link>
          </div>
        </article>
        <hr></hr>
        <section className="d-grid">
          <Table striped responsive bordered hover>
            <thead>
              <tr className="text-center">
                <th>Cod</th>
                <th>Product</th>
                <th>Precio</th>
                <th>Url de la Imagen</th>
                <th>Categoria</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <ItemTabla></ItemTabla>
            </tbody>
          </Table>
        </section>
      </Container>
    </>
  );
};

export default Administrador;
