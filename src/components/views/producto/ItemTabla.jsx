import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemTabla = () => {
    return (
        <>
        <tr className="text-center">
          <td>1</td>
          <td>Mark</td>   
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td className="d-flex  justify-content-center">
            <Link className="mx-3 btn btn-warning" to={`/administrar/editar/:id`} size='sm'>Editar</Link>
          <Button variant='danger'type='button'size='sm'>Borrar</Button></td>
        </tr>  
        </>
    );
};

export default ItemTabla;