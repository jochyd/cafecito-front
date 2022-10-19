import React from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import { obtenerProdcutoAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    obtenerProdcutoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setProducto(respuesta.dato);
      }
    });
  }, []);

  return (
    <>
      <div className="mainSection">
        <Container className="my-4">
          <Card className="w-100 h-50">
            <Row>
              <Col md={4}>
            <Card.Img
              src={producto.imagen}
             
            />
              </Col>
              <Col md={8}>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <hr></hr>
              <Badge pill bg='primary'>{producto.categoria}</Badge>
              <Card.Text className="mt-3">${producto.precio}</Card.Text>
            </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default DetalleProducto;
