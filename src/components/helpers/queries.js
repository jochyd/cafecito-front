const URL = process.env.REACT_APP_API_PRODUCTOS;
const URLUsuarios = process.env.REACT_APP_API_USUARIOS;
//peticion get para obtener todos los productos
// GET: consultar y devuelve informacion 
// POST: pide al servidor backend crear un nuevo producto, usuarios, etc, en los login tambien se pueden utilizar
// PUT: sirve para modificar un producto, usuario u otro elemento.
// DELETE: borrar producto, usuario u otro elemento.
console.log(URLUsuarios)

export const consultarAPI = async () =>{
    try{
        //esto es una peticion get
        
        const respuesta = await fetch(URL)
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(error){
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
        return false;
    }
}
export const crearUsuarioAPI = async (usuario) =>{
    try{
        //esto es una peticion POST
        const respuesta = await fetch(URLUsuarios, {
            method: 'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    }catch(error){
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
        return false;
    }
}

export const obtenerProdcutoAPI = async (id) =>{
    try{
        //esto es una peticion get
        const respuesta = await fetch(URL+'/'+id);
        const producto = {
            dato: await respuesta.json(),
            status: respuesta.status
        }
    return producto;
    }catch(error){
        return false;
    }
}
