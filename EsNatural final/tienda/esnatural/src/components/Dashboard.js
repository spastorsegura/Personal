import React, { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productoService";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";


export default function Dashboard() {
    const [productos, setProductos] = useState([]);

    const getProducts = async () => {
      let response = await obtenerProductos();
      let productosConId = response.map((prod) => {
        //agregamos la propiedad ID que me pide el DataGrid
        return { ...prod, id: prod.id };
      });
      setProductos(productosConId);
    };
  
    useEffect(() => {
      getProducts();
    }, []);
  
  
    let columns = [
      { field: "nombre", headerName: "Nombre", width: 400 },
      { field: "descripcion", headerName: "Descripción", width: 400 },
      { field: "precio", headerName: "Precio", width: 200 },
      {
        field: "id",
        headerName: "Acciones",
        renderCell: (params) => (
          //Aquí ya puedo poner JSX
          <div>
            <Link
              className="btn btn-info mx-2"
              to={`/editarproducto/${params.value}`}
            >
              <i className="fas fa-pencil-alt"></i>
            </Link>
            <Link
              className="btn btn-danger"
              to={`/eliminarproducto/${params.value}`}
            >
              <i className="fas fa-trash"></i>
            </Link>
          </div>
        ),
        width:200
      },
    ];

  return (
    <div className="mt-3">
      <h1 className="display-4">Dashboard</h1>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-4">
          <div className="d-grid">
            <Link className="btn btn-primary mb-3" to="/crearproducto">
              Crear Producto
            </Link>
          </div>
        </div>

        <div className="col-12">
          <div style={{ width: "100%", height: "600px" }}>
            <DataGrid rows={productos} columns={columns} pageSize={8} />
          </div>
        </div>
      </div>
    </div>
  );
}
