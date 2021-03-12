import React from 'react'

export default function Footer() {
    return (
        <footer className="row d-flex p-4">
                <div className="col-md-7">
                <div className="h7">Contáctanos</div>
                            <form id="registro">
                                <div className="form-group mb-3">
                                <input type="text" id="nombre" placeholder="Nombre" className="form-control"/>
                                </div> 
                                <div className="form-group mb-3">
                                <input type="email" id="email" placeholder="Email" className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                <input type="text" id="tema" placeholder="Tema" className="form-control"/>
                                </div>
                                <div className="form-group mb-3">
                                <textarea cols="30" rows="10" placeholder="Colocar tu mensaje" className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                <input type="submit" value="Suscríbete" className="btn"/>
                                </div>
                            </form>
                </div>
                <div className="col-md-5">
                <div className="logo2 mb-5"></div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vel
                    velit repellendus in commodi, rem perferendis quia, aliquid optio
                    voluptatibus laudantium ea animi deserunt qui, dignissimos quos?
                    Itaque, ducimus nobis!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                    inventore?
                </p>
                </div>
    </footer>
    )
}
