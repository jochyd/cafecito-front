import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const CardProducto = () => {
    return (
      <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Ver más</Button>
      </Card.Body>
    </Card>
      </Col>
    );
};

export default CardProducto;