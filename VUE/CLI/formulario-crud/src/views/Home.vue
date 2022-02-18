<template>
  <div>
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
    ...mapActions(['setTareas']),
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
  }
}
</script>
