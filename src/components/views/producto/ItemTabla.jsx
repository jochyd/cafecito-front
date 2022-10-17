import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemTabla = ({producto, setProductos}) => {
  const borrarProducto = ()=>{
    //agregar la ventana de sweet alert del crud de javascript
    borrarProductoAPI(producto.id).then((respuesta)=>{
      if(respuesta.status === 200){
        Swal.fire('Producto eliminado','El producto fue correctamente eliminado','success');
        // luego de eliminar el producto, busco todos los productos existentes en este instante de tiempo. 
        consultarAPI().then((respuesta)=>{
          //actualizo el state de productos de administrador con los datos que hay en la api
          setProductos(respuesta);
        })
      }else{
        Swal.fire('Ocurrio un error','Intente nuevamente mas tarde','error');
      }
    })
  }

    return (
        <>
        <tr className="text-center">
          <td>{producto.id}</td>
          <td>{producto.nombreProducto}</td>   
          <td>{producto.precio}</td>
          <td>{producto.imagen}</td>
          <td>{producto.categoria}</td>
          <td className="d-flex  justify-content-center">
            <Link className="mx-3 btn btn-warning" to={`/administrar/editar/:id`} size='sm'>Editar</Link>
          <Button variant='danger'type='button'size='sm' onClick={borrarProducto}>Borrar</Button></td>
        </tr>  
        </>
    );
};

export default ItemTabla;