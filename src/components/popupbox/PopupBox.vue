<template>
  <div class="popup-box">
    <popup-box-header></popup-box-header>
    <popup-box-content></popup-box-content>
  </div>
</template>

<script>
import PopupBoxHeader from './comp/PopupBoxHeader'
import PopupBoxContent from './comp/PopupBoxContent'
export default {
  components:{
    PopupBoxHeader,
    PopupBoxContent
  },
  methods:{
  },
  
}
</script>

<style scoped>
.popup-box {
  width: 90%;
  margin: 0.2rem auto;
  background-color: lightyellow;
  border-radius: 0.05rem;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  overflow: hidden;
}


</style>