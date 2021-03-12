import firebase from 'firebase'

const config={
    apiKey: "AIzaSyBln0jHv7HoHFO6cLG8VKPa0kLOhmQHO0E",
    authDomain: "productos-66b00.firebaseapp.com",
    projectId: "productos-66b00",
    storageBucket: "productos-66b00.appspot.com",
    messagingSenderId: "642286087401",
    appId: "1:642286087401:web:bfc403e0c600d72f3d5478"
}

const fire=firebase.initializeApp(config)

export{
    fire as default
}