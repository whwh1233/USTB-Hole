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
      
    }
  }
}
</script>

<style scoped>

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>