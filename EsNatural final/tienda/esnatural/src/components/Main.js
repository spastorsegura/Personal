import React from 'react'
import imagenes from './assets/imagenes'
import './css/estilos.css'

export default function Main() {
    return (
        <main className="mt-5">
      {/* <!-- 1 --> */}
      <div className="row align-items-center mb-3">
        <div className="col-md-5 text-center">
          <img src={imagenes.image1} alt="product1" width="40%" />
        </div>
        <div className="col-md-7">
          <h2>Haz de tu verano</h2>
          <h1>más refrescante</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, illo?
          </p>
          <button className="btn btn-primary" style={{border: "0"}}>Conócelo más</button>
        </div>
      </div>

      {/* <!-- 2 --> */}
      <div className="row caja p-4">
        <div className="col-md caja1 p-4 m-4">
          <h3>Producto</h3>
          <h4>Tendencia</h4>
        </div>
        <div className="col-md caja2 p-4 m-4">
          <h3>Los más</h3>
          <h4>Selectos</h4>
        </div>
      </div>
      
      {/* <!-- 3 --> */}
      <div className="row align-items-center" style={{position: "relative"}}>
        {/* <!-- cuadro naranja--> */}
      <div className="col" id="naranja" style={{position: "absolute", top: "0",left: "0"}}></div>

        <div className="col-md">
          <img src={imagenes.granjero} alt="granjero"/>
        </div>
        <div className="col-md">
          <h5>No te pierdas</h5>
          <h6>nuestras novedades</h6>
          <form>
            <div className="row align-items-center">
              <div className="col-md mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingrese su email"
                />
              </div>
              <div className="col-md">
                <button className="btn btn-primary">Suscríbete</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
    )
}
