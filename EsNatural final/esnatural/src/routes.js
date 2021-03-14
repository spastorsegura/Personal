import React, { Fragment, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthFireContext } from "./context/authFireContext";
// importando componente Vistas
import HomeView from "./views/HomeView";
import DetalleView from "./views/DetalleView";
import CrearProductoView from "./views/CrearProductoView";
import DashboardView from "./views/DashboardView";
import EditarProductoView from "./views/EditarProductoView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import ProductView from "./views/ProductView";

export default function Routes() {
  const { userId } = useContext(AuthFireContext); //con esto ya tengo el userId

  return (
    <Fragment>
      {/* definir las rutas */}
      <Route path="/" exact component={HomeView} />
      <Route path="/detalle/:id" exact component={DetalleView} />
      <Route path="/productos" exact component={ProductView} />
      <Route path="/crearproducto" exact component={CrearProductoView} />
      <Route path="/login" exact component={LoginView} />
      <Route path="/editarproducto/:id" exact component={EditarProductoView} />
      <Route path="/registrarse" exact component={RegisterView} />

      <Route
        path="/dashboard"
        exact
        render={() => {
          if(userId !== null){
            return <DashboardView/>
          }else{
            return <Redirect to='/login'/>
          }
        }}
      />
    </Fragment>
  );
}
