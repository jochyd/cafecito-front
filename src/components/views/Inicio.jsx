import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useEffect } from "react";
import { consultarAPI } from "../helpers/queries";

const Inicio = () => {
  const [verProductos, setVerProductos] = useState([])
  
  useEffect(()=>{
    consultarAPI().then((respuesta)=>{
      setVerProductos(respuesta);
      console.log(respuesta)
    });
    },[])

  return (
    <div className="mainSection">
      <h1 className="display-1 fw-lighter text-center">Bienvenidos</h1>
      <hr />
      <Container>
        <Row>
          {
          verProductos.map((producto)=>{return<CardProducto key={producto.id} producto={producto}></CardProducto>
})
          }
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
