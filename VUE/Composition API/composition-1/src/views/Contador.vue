<template>
    <div>      
        <h1>Contador:{{contador}}</h1>
        <Btn :textoBoton="'Aumentar'" @accion="aumentar"/>
        <Btn :textoBoton="'Disminuir'" @accion="disminuir"/>
    </div>
</template>

<script>
import Btn from '../components/Btn'
import {useContador} from '../hooks/useContador'
export default {
    components:{
        Btn
    },
    setup(){
        return {...useContador()}
    }
}
</script>