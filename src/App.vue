<template>
  <div id="app">
    <nav-bar></nav-bar>
    <content-group></content-group>
  </div>
</template>

<script>
import Home from './views/Home'
import NavBar from '@/components/NavBar'
import ContentGroup from '@/components/ContentGroup'
export default {
  components:{
    Home,
    ContentGroup,
    NavBar
  },
  data () {
    return {
      
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('./static/img/gbp.jpg') no-repeat 0 -200px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}
</style>
