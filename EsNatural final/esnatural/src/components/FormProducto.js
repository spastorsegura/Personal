import React,{useState,useEffect} from 'react'
import {crearProducto} from '../services/productoService'
import Swal from 'sweetalert2'

export default function FormProducto() {

    const[value,setValue]=useState({
        nombre:"",
        descripcion:"",
        precio:0,
        stock:0
    })

    const actualizarInput = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const manejarSubmit = async(e) =>{
        e.preventdefault()
        let response = await crearProducto({...value})
        
        Swal.fire({
            icon:"success",
            title:"Producto creado",
            showConfirmButton:false,
            timer:2000
        })
    }

    return (
        <div className="col-md">
            <form onSubmit={(e)=>{manejarSubmit(e)}}>
                <div className="mb-2">
                    <label className="form-label">Nombre producto</label>
                    <input
                        type="text"
                        placeholder="Ej. cápsulas orgánicas"
                        name="nombre"
                        className="form-control"
                        value={value.nombre}
                        onChange={(e)=>{actualizarInput(e)}}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Descripcion producto</label>
                    <input
                        type="text"
                        placeholder="Ej. Producto con propiedades de la vitamina C..."
                        name="descripcion"
                        className="form-control"
                        value={value.descripcion}
                        onChange={(e)=>{actualizarInput(e)}}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Precio producto</label>
                    <input
                        type="number"
                        placeholder="20"
                        name="precio"
                        className="form-control"
                        value={value.precio}
                        onChange={(e)=>{actualizarInput(e)}}
                    />
                </div>
                <div className="mb-2">
                    <label className="form-label">Stock producto</label>
                    <input
                        type="number"
                        placeholder="20"
                        name="stock"
                        className="form-control"
                        value={value.stock}
                        onChange={(e)=>{actualizarInput(e)}}
                    />
                </div>
                <button className="btn btn-primary" type="submit">Crear producto</button>
            </form>
        </div>
    )
}
