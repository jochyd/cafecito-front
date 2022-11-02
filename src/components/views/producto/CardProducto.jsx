
import { Card, Button, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const CardProducto = ({producto}) => {

    return (
      <Col>
        <Card style={{ width: '18rem' }} className='my-2'>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombreProducto}</Card.Title>
        <Card.Text>
          {producto.categoria}
        </Card.Text>
        <Card.Text>
          {producto.precio}
        </Card.Text>
        <Button variant="danger" as={Link} to={`administrar/detalle/${producto._id}`}>Ver más</Button>
      </Card.Body>
    </Card>
      </Col>
    );
};

export default CardProducto;