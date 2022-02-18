<template>
  <div>
    <h1 class="mb-5 text-center">Formularios con Vue.js</h1>
    <form @submit.prevent="procesarFormulario">
      <Input :tarea='tarea'/>
    </form>
    <hr>
    <ListasTareas/>  
  </div>
</template>

<script>

import Input from '../components/Input'
import ListasTareas from '../components/ListasTareas'
import {mapActions} from 'vuex'
const shortid = require('shortid')

export default {
  name: 'Home',
  components: {
    Input, ListasTareas
  },
  data(){
    return{
      tarea:{
        id:'',
        nombre:'',
        categorias:[],
        estado:'',
        numero:0
      }
    }
  },
  methods:{
    ...mapActions(['setTareas','cargarLocalStorage']),
    procesarFormulario(){
      console.log(this.tarea)
      if(this.tarea.nombre.trim()===""){
        console.log("campo vacío")
        return
      }
      console.log("no está vacío")

      //genera ID
      this.tarea.id=shortid.generate()
      console.log(this.tarea.id)

      
      //envío datos
      this.setTareas(this.tarea)

      //limpiar datos
      this.tarea={
        id:'',
        nombre:'',
        categorias:[],
        estado:'',
        numero:0
      }
    }
  },
  created(){
    this.cargarLocalStorage()
  }
}
</script>
