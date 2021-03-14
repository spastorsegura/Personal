import React from 'react'
import HomeView from './views/HomeView'
import ProductView from './views/ProductView'
import DetalleView from './views/DetalleView'

import AuthContextProvider from "./context/authFireContext";

import {Switch, BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'

export default function App() {
  return (

    <Router>
      <AuthContextProvider>
      <div className="container">
        <Switch>
          <Routes/>
        </Switch>
      </div>
      </AuthContextProvider>
    </Router>
  )
}
