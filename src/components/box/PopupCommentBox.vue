<template>
  <div class="popup-comment-box">
    <comment-header :message="message"></comment-header>
    <box-content :message="message"></box-content>
  </div>
</template>

<script>
import BoxHeader from './comp/BoxHeader'
import BoxContent from './comp/BoxContent'
import CommentHeader from './comp/CommentHeader'
export default {
  components:{
    BoxHeader,
    BoxContent,
    CommentHeader
  },
  methods:{
   
  },
  props:[
    'message'
  ]
}
</script>

<style scoped>
.popup-comment-box {
  width: 90%;
  margin: 0.2rem auto;
  background-color: lightyellow;
  border-radius: 0.05rem;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  overflow: hidden;
}


</style>