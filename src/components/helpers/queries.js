const URL = process.env.REACT_APP_API_CAFECITO;

export const consultarAPI = async () =>{
    //peticion get para obtener todos los productos
    try{
        console.log(URL);
        const respuesta = await fetch(URL)
        console.log(respuesta);
    }catch(error){
        console.log(error)
    }
}
