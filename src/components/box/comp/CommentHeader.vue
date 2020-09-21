<template>
  <div>
    <div class="box-header">
      <left-header :message="message"></left-header>
      <!-- <right-header :message="message"></right-header> -->
      <comment-right-header  :message="message"></comment-right-header>
    </div>
  </div>
</template>

<script>
import LeftHeader from './LeftHeader'
import CommentRightHeader from './CommentRightHeader'
export default {
  components:{
    LeftHeader,
    CommentRightHeader
  },
  props:[
    'message'
  ]
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