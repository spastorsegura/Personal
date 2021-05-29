import React, { useState, useEffect } from "react";
import { crearProducto } from "../services/productoService";
import {useHistory} from 'react-router-dom'
import Swal from "sweetalert2";

export default function FormProducto() {
  const [value, setValue] = useState({
    nombre:"",
    descripcion:"",
    precio:0,
    stock:0,
  })

  let history = useHistory()

  const actualizarInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const manejarSubmit = async (e) => {
    e.preventDefault()

    let response = await crearProducto({...value})

    Swal.fire({
      icon: "success",
      title: "Producto creado",
      showConfirmButton:false,
      timer:2000
    }).then(() => {
      history.push('/dashboard')
    })
  }

  return (
    <div>
      <form onSubmit={(e) => {manejarSubmit(e)}}>
        <div className="mb-2">
          <label className="form-label">
            Nombre Producto
          </label>
          <input 
            type="text" 
            placeholder="Ej. Vitaminas A"
            name="nombre"
            className="form-control"
            value={value.nombre}
            onChange={(e) => {actualizarInput(e)}}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">
            Descripción
          </label>
          <input 
            type="text" 
            placeholder="Ej. Nutrientes como vitamina C"
            name="descripcion"
            className="form-control"
            value={value.descripcion}
            onChange={(e) => {actualizarInput(e)}}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">
            Precio
          </label>
          <input 
            type="number" 
            placeholder="20"
            name="precio"
            className="form-control"
            value={value.precio}
            onChange={(e) => {actualizarInput(e)}}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">
            Stock
          </label>
          <input 
            type="number" 
            placeholder="15"
            name="stock"
            className="form-control"
            value={value.stock}
            onChange={(e) => {actualizarInput(e)}}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Crear Producto
        </button>
      </form>
    </div>
  )
}
