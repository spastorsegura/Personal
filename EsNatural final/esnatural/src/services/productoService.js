import axios from 'axios'

const URL = "https://601f26e9b5a0e9001706a325.mockapi.io/productos"
// const URL = "https://backfloresv1.herokuapp.com/api/v1/productos"

const obtenerProductos = async () => {
    try {
        let {data} = await axios.get(URL)
        return data
    } catch (error) {
        return error
    }
}

const obtenerProductoPorId = async(id)=>{
    try {
        let {data} = await axios.get(`${URL}/${id}`)
        return data
    } catch (error) {
        return error
    }
}

const crearProducto = async(objProducto)=>{
    try {
        let headers = {
            "content-type":"application/json"
        }
        let{data} = await axios.post(URL,objProducto,{headers})
        return data.content
    } catch (error) {
        return error
    }
}

export {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto
}