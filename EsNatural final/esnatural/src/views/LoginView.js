import React, {useState, useContext} from 'react' 
import {loginFire} from "../services/authFireService"
import {AuthFireContext} from '../context/authFireContext'
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'
import Header from '../components/Header'

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {userId, setAuthUserId} = useContext(AuthFireContext)
  
  let history = useHistory()

  const login = (e) => {
    e.preventDefault()
    loginFire(email, password)
    .then(rpta => {
      console.log(rpta)
      setAuthUserId(rpta.user.uid)
      Swal.fire({ 
        icon:'success',
        title:'Login exitoso!',
        timer:2000,
        showConfirmButton:false
      })
      .then(()=>{
        history.push('/dashboard')
      })
    })
    .catch(error => console.log(error))
  }

  return (
   <div className="col-md">
     <Header/>
      <h1 className="display-4" style={{marginTop:'15rem'}} >Login</h1>
      <form onSubmit={(e) => {login(e)}}>
        <div>
          <label className="form-label">Correo</label>
          <input 
            className="form-control mb-2" 
            type="email" 
            placeholder="jperez@tecsup.edu.pe"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div>
          <label className="form-label">Contraseña</label>
          <input 
            className="form-control mb-2" 
            type="password" 
            placeholder="Ingrese una contraseña segura"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>

    </div>
  )
}
