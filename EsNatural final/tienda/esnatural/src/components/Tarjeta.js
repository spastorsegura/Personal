import React from 'react'
import { Link } from 'react-router-dom'
import { obtenerProductos } from '../services/productoService'
import "./css/estilos.css"

export default function Tarjeta({producto}) {
    return (
        <div className="col-sm-12 col-lg-6 col-xl-2 m-2">
            <div className="card">
                <img src={producto.imagen} alt={producto.nombre}/>
                <div className="card-body d-grid justify-content-center">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="font-weight-bold">
                        Precio: S/{producto.precio}
                    </p>
                    <Link className="btn btn-primary btn-sm" to={`/detalle/${producto.id}`}>Ver detalles</Link>
                </div>

            </div>
        </div>
    )
}
