<template>
  <div>
    <div class="box-header">
      <popup-left-header></popup-left-header>
      <popup-right-header></popup-right-header>
    </div>
  </div>
</template>

<script>
import PopupLeftHeader from './PopupLeftHeader'
import PopupRightHeader from './PopupRightHeader'
export default {
  components:{
    PopupLeftHeader,
    PopupRightHeader
  },
  
}
</script>

<style scoped>
.box-header{
  padding-top: 0.1rem;
  padding-left: 0.2rem;
  display: flex;
  position: relative;
}

</style>