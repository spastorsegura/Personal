import React from 'react'
import HomeView from './views/HomeView'
import ProductView from './views/ProductView'
import DetalleView from './views/DetalleView'

import {Switch, BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'

export default function App() {
  return (
    <Router>
      <div className="container-fluid p-0">
        <Switch>
          <Routes/>
        </Switch>
      </div>
    </Router>
  )
}
