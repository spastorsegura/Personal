import {obtenerProductos} from '../services/productoService'
import Tarjeta from './Tarjeta'
import React, {useState, useEffect} from 'react'
import './css/estilos.css'

export default function Tarjetas() {
    const [productos,setProductos]=useState([])

    const getProducts = async() =>{
        let data=await obtenerProductos()
        setProductos(data)
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (
        <div className="row tarjetas">
            {
                productos.map((prod, i)=>(
                    <Tarjeta producto={prod} key={i}/>
                ))
            }
        </div>
    )
}
