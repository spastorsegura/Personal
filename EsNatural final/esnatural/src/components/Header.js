import React from "react";
import {Link} from 'react-router-dom'
import './css/estilos.css'

export default function Header() {
  return (
    <header className="container-fluid fixed-top">
      <div className="row d-flex justify-content-between align-items-center  p-4">
        <div className="col-md">
          <Link to="/"><div className="logo"></div></Link>
        </div>
        <div className="col-md">
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Nosotros</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="sesion.html"
                  >Iniciar sesión
                  <i className="bi bi-person-fill" style={{color: '#ee741a'}}></i
                ></a>
              </li>
            </ul>
          </nav>   
        </div>
      </div>
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-md"></div>
        <div className="col-md"></div>
      </div>
      
    </header>
  )
}
