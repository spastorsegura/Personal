import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import HomeView from "./views/HomeView";
import ProductView from "./views/ProductView";
import DetalleView from "./views/DetalleView";
import RegisterView from "./views/RegisterView";
import CrearProductoView from "./views/CrearProductoView";
import DashboardView from "./views/DashboardView";
import EditarProductoView from "./views/EditarProductoView";
import LoginView from "./views/LoginView";


export default function routes() {
  return (
    <Fragment>
      <Route path="/" exact component={HomeView} />
      <Route path="/productos" exact component={ProductView} />
      <Route path="/detalle/:id" exact component={DetalleView} />
      <Route path="/registrarse" exact component={RegisterView} />
      <Route path="/login" exact component={LoginView} />
      <Route path="/crearproducto" exact component={CrearProductoView} />
      <Route path="/dashboard" exact component={DashboardView} />
      <Route path="/editarproducto/:id" exact component={EditarProductoView} />


    </Fragment>
  );
}
