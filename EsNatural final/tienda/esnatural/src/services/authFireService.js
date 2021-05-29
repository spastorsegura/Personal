import fire from '../config/Firebase'

//registrar
const registroFire = (email,password) => {
    return fire.auth().createUserWithEmailAndPassword(email,password)
}

//ingresar
const loginFire = (email, password) => {
    return fire.auth().signInWithEmailAndPassword(email, password)
  }
  
//salir - logout
  const logoutFire = () => {
    return fire.auth().signOut()
  }
  
  export {
    registroFire,
    loginFire,
    logoutFire
  }