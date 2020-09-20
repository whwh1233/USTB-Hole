<template>
  <div>
    <div class="box-header">
      <left-header></left-header>
      <right-header></right-header>
    </div>
  </div>
</template>

<script>
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
export default {
  components:{
    LeftHeader,
    RightHeader
  }
}
</script>

<style scoped>
.box-header{
  padding-top: 10px;
  padding-left: 20px;
  display: flex;
  position: relative;
}

</style>