<template>
  <div>  
    <h1>App Contador: {{contador}}</h1>
    <contador-uno/>
    <contador-accion/>
  </div>
</template>

<script>
import {provide, ref} from 'vue'
import ContadorUno from './components/ContadorUno.vue'
import ContadorAccion from './components/ContadorAccion.vue'

export default
{
  components: { ContadorUno, ContadorAccion },
  name: 'App',
  setup(){
    const contador = ref(0)

    provide('contador',contador)

    return {contador}
  }
}
</script>
