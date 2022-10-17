//agregar estos componentes 
import './app.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';
import Inicio from './components/views/Inicio';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import DetalleProducto from './components/views/producto/DetalleProducto';
import CrearProducto from './components/views/producto/CrearProducto';
import EditarProductos from './components/views/producto/EditarProductos';
import Login from './components/views/producto/Login';
import Registrar from './components/views/producto/Registrar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   //administrar las rutas primero va BrowserRouter, luego va routes va uno solo por cada ruta, en el route se agrega el padth
    <BrowserRouter>
     {/*Aqui mostramos el componente nav el menu  */}
     <Menu></Menu>
    <Routes>
      {/*las rutas siempre son nombre de domino + path*/}
      {/*Este es el inicio  */}
      <Route exact path='/' element={<Inicio></Inicio>} ></Route>
      {/*Pagina administraador */}
      <Route exact path='/administrar' element={<Administrador></Administrador>}></Route>
      {/*Pagina error */}
      <Route exact path='*' element={<Error404></Error404>}></Route>
      <Route exact path='/administrar/detalle' element={<DetalleProducto></DetalleProducto>}></Route>
      <Route exact path='/administrar/crear' element={<CrearProducto></CrearProducto>}></Route>
      <Route exact path='/administrar/editar/:id' element={<EditarProductos></EditarProductos>}></Route>
      <Route exact path='/login' element={<Login></Login>}></Route>
      <Route exact path='/registrar' element={<Registrar></Registrar>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
