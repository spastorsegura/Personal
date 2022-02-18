<template>
  <Navbar/>
  <div class="container mt-2">
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components:{
    Navbar
  }
}
</script>

