<template>
  <div>
    <div class="box-header">
      <left-header :message="message"></left-header>
      <right-header :message="message"></right-header>
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
  },
  props:[
    'message'
  ]
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