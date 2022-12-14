import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { editarProductoAPI, obtenerProdcutoAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarProductos = () => {
  //aqui usamos useparams const id
  const {id} = useParams();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navegacion = useNavigate();

  useEffect(() => {
    obtenerProdcutoAPI(id).then((respuesta)=>{
      if(respuesta.status ===200){
        console.log(respuesta);
        //cargar los datos en el formulario
        setValue('nombreProducto', respuesta.dato.nombreProducto);
        setValue('precio', respuesta.dato.precio);
        setValue('imagen', respuesta.dato.imagen);
        setValue('categoria', respuesta.dato.categoria);
      }})}, []);


  const onSubmit = (data) => {
    console.log(data);
    editarProductoAPI(id, data).then((respuesta)=>{
      if(respuesta.status ===200){
        Swal.fire('Producto modificado','El producto fue modificado correctamente','success')
        navegacion('/administrar');
      }else{
        Swal.fire('Ocurrio un error','El producto no pudo ser modificado','error')
      }
    });
  };

  return (
    <>
      <Container className="mainSection">
        <h1 className="display-5 mt-5 fw-lighter">Editar Producto</h1>
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
                  required: "El precoi es unu valor obligatorio",
                  min: {
                    value: 1,
                    message: "El precio minimo debe ser de $1",
                  },
                  max: {
                    value: 10000,
                    message: "El precio maximo admitido es de $10000",
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
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className="my-2">Categoría*</Form.Label>
              <Form.Select
                {...register("categoria", {
                  required: "Debe seleccionar una categoría",
                })}
              >
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

export default EditarProductos;
