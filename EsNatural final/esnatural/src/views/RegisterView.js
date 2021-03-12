import React, {useState} from 'react'
import {registroFire} from '../services/authFireService'

export default function RegisterView() {
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')

    const registrar = (e) => {
        e.preventdefault()
        registroFire(email,password)
        .then(rpta=>console.log(rpta))
        .catch(error=>console.log(error))
    }

    return (
        <main className="container-fluid">
        <h1 className="display-4">Crear nuevo usuario</h1>
        <form onSubmit={(e)=>{registrar(e)}}>
            <div className="mb-2">
                <label className="form-label">Correo</label>
                <input 
                type="email" 
                className="form-control"
                placeholder="sergio_cybert@hotmail.com"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div className="mb-2">
                <label className="form-label">Contraseña</label>
                <input 
                type="password" 
                className="form-control"
                placeholder="Ingrese una contraseña segura" 
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}              
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Crear nuevo usuario
            </button>
        </form>
    </main>
    )
}
