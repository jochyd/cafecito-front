const URL = process.env.REACT_APP_API_CAFECITO;
//peticion get para obtener todos los productos
// GET: consultar y devuelve informacion 
// POST: pide al servidor backend crear un nuevo producto, usuarios, etc, en los login tambien se pueden utilizar
// PUT: sirve para modificar un producto, usuario u otro elemento.
// DELETE: borrar producto, usuario u otro elemento.


export const consultarAPI = async () =>{
    try{
        //esto es una peticion get
        console.log(URL);
        const respuesta = await fetch(URL)
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const crearProductoAPI = async (producto) =>{
    try{
        //esto es una peticion POST
        const respuesta = await fetch(URL, {
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const borrarProductoAPI = async (id) =>{
    try{
        //esto es una peticion DELETE
        const respuesta = await fetch(URL+'/'+id, {
            method: 'DELETE',
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}