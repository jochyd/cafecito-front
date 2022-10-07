import React from 'react';
import { Card, Container } from 'react-bootstrap';
const DetalleProducto = () => {
    return (
        <div className="mainSection">
            <Container className='my-4'>
             <Card className='d-flex flex-row flex-nowrap overflow-auto'>
      <Card.Img variant="bottom" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <hr></hr>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </Container>
        </div>
    );
};

export default DetalleProducto;