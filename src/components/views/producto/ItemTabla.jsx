import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemTabla = ({producto}) => {
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
          <Button variant='danger'type='button'size='sm'>Borrar</Button></td>
        </tr>  
        </>
    );
};

export default ItemTabla;