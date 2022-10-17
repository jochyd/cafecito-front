import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const {
    register,
    handleSubmit,
    formState:{errors},
} = useForm();

const onSubmit = (data)=>{
    console.log(data);
}
  return (
    <>
      <NavLink className={"nav-item nav-link"} onClick={handleShow}>
        Registrarse
      </NavLink>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Label>Ingresa Un Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Josefina"
                {...register("nombre", {
                  required: "El Nombre es obligatorio",
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
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Label>Ingresa un Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Daoua"
                {...register("apellido", {
                  required: "El Apellido es obligatorio",
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
                {errors.apellido?.message}
              </Form.Text>
            </Form.Group>
              <Form.Label>Ingresa tu Email</Form.Label>
              <Form.Control type="email" placeholder="jochydaoua@gmail.com" 
              {...register('email',{
                required: 'El email es obligatorio}',
                pattern:{
                    value:/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])[A-Za-z\d$@$!%?&]{8,15}/,
                    message:'La contraseña debe tener minimo 8, maximo 15, una mayuscula, un digito, no espacio, un caracter especial',
                }
              })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="****" 
              {...register('contrasenia',{
                required: 'El contraseña es obligatorio',
                pattern:{
                    value:/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
                    message:'El email debe ser valido'
                }                
              })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
                {errors.contrasenia?.message}
              </Form.Text>
              <hr></hr>
              <div className="text-center">
            <Button variant="danger" type="submit">
           Ingresar
            </Button>
              </div>
          </Form>
        </Modal.Body>
          <Button variant="dark" onClick={handleClose}>
            Cerrar
          </Button>
      </Modal>
    </>
  );
};

export default Login;