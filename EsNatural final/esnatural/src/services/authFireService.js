import fire from '../config/Firebase'

//registrar
const registroFire = (email,password) => {
    return fire.auth().createUserWithEmailAndPassword(email,password)
}

//ingresar

//salir - logout


export{
    registroFire
}