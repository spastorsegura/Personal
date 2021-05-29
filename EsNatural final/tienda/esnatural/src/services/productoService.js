import axios from "axios";

const URL = "https://601f26e9b5a0e9001706a325.mockapi.io/productos";

const obtenerProductos = async () => {
  try {
    let { data } = await axios.get(URL);
    return data;
  } catch (error) {
    return error;
  }
};

const obtenerProductoPorId = async (id) => {
  try {
    let { data } = await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

const crearProducto = async (objProducto) => {
 try {
    let headers = {
      "Content-Type":"application/json"
    }
    let {data} = await axios.post(URL, objProducto, {headers})
    return data.content
  } catch (error) {
    return error
  }
};

const editarProducto = async (objProducto, id) => {
  try {
    let headers = {
      "Content-Type":"application/json"
    }
    let {data} = await axios.put(`${URL}/${id}`, objProducto, {headers})
    console.log({data})
    return data.content
  } catch (error) {
    return error
  }
}



export {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto,
  editarProducto
 };
