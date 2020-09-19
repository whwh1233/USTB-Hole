<template>
  <div id="nav">
    <title-bar></title-bar>
    <control-group></control-group>
    
  </div>
</template>

<script>
import TitleBar from './NavBar/TitleBar'
import ControlGroup from './NavBar/ControlGroup'

export default {
  components:{
    TitleBar,
    ControlGroup
  } ,
  methods:{
    
  },
  data () {
    return {
      istrue:true
    }
  }
}
</script>

<style scoped>
  #nav {
  background-color: hsla(0,0%,100%,.8);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>