import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearProducto = () => {
  //asi ponemos con el useForm del hook..si o si agregar estos son las etapas
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //esta funcion se ejecuta despues del evento del handleSubmit del form linea 18(esta es mi funcion)
  const onSubmit = (data) => {
    console.log(data);
    //aqui hacer la peticion de la api
  };

  return (
    <>
      <Container className="mainSection">
        <h1 className="display-5 mt-5 fw-lighter">Nuevo Producto</h1>
        <hr></hr>
        <section>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Label>Nombre producto*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Café"
                {...register("nombreProducto", {
                  required: "El nombre del producto es un dato obligatorio",
                  minLength: {
                    value: 2,
                    message: "La cantidad minima de caracteres debe ser 2",
                  },
                  maxLength: {
                    value: 20,
                    message: "La cantidad maxima de caracteres es 20",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreProducto?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label>Precio*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 50"
                {...register("precio", {
                  required: "El precio es un valor obligatorio",
                  min: {
                    value: 1,
                    message: "El precio minimo debe ser de $1",
                  },
                  max: {
                    value: 10000,
                    message: "El precio máximo admitido es de $10.000",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.precio?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: https://media.istockphoto.com/photos/black-coffee-isolated-on-a-white-background-picture-id1286808993?s=612x612"
                {...register("imagen", {
                  required: "La URL de la imagen es obligatoria",
                  pattern: {
                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "Debe ingresar una URL valida",
                  }
                })}
              />
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-2">Categoría*</Form.Label>
              <Form.Select {...register('categoria',{
                required:'Debe seleccionar una categoría'
              })}>
                <option value="">Seleccione una Opción</option>
                <option value="Bebida Caliente">Bebida Caliente</option>
                <option value="Bebida Fría">Bebida Fría</option>
                <option value="Salado">Salado</option>
                <option value="Dulce">Dulce</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.categoria?.message}
              </Form.Text>
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

export default CrearProducto;
