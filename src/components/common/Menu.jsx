import { Navbar,Container, Nav, Button} from "react-bootstrap";
//importo el link para poner las rutas en vez de href de los navbar.brand
import { Link, NavLink } from "react-router-dom";
import Login from "../views/producto/Login";
import Registrar from "../views/producto/Registrar";
import { useState } from "react";


const Menu = () => {
 const [usuarioLogueado, setUsuarioLogueado] = useState({});

 const cerrarSesion = () =>{
  localStorage.removeItem('usuarioLogueado');
  setUsuarioLogueado('');
 }
    return (
        <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>Cafecito</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/' className={'nav-item nav-link'} >Inicio</NavLink>
              {
                usuarioLogueado?<>
              <NavLink to='/administrar' className={'nav-item nav-link'} >Administrador</NavLink>
              <Button variant={'dark'} onClick={cerrarSesion}>Cerrar Sesion</Button>
              <Registrar></Registrar>
                </>:
              <Login setUsuarioLogueado={setUsuarioLogueado} ></Login>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;