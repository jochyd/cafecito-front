//agregar estos componentes 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Administrador from './components/views/Administrador';
import Erro404 from './components/views/Erro404';
import Inicio from './components/views/Inicio'

import Menu from './components/common/Menu'
import Footer from './components/common/Footer'


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
      <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
      {/*Pagina error */}
      <Route exact path='*' element={<Erro404></Erro404>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
