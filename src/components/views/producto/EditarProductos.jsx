import { Form, Button, Container } from "react-bootstrap";

const EditarProductos = () => {
    return (
        <>
             <Container className="mainSection">
        <h1 className="display-5 mt-5 fw-lighter">Editar Producto</h1>
        <hr></hr>
        <section>
          <Form>
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Label>Nombre producto*</Form.Label>
              <Form.Control type="text" placeholder="Ej: Café" />
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label>Precio*</Form.Label>
              <Form.Control type="number" placeholder="Ej: 50" />
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://media.istockphoto.com/photos/black-coffee-isolated-on-a-white-background-picture-id1286808993?s=612x612"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-2">Categoria*</Form.Label>
              <Form.Select>
                <option>Seleccione una Opción</option>
                <option>Cafeteria</option>
                <option>Dulce</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className="my-3">
              Guardar
            </Button>
          </Form>
        </section>
      </Container>
        </>
    );
};

export default EditarProductos;