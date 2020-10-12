<template>
  <div class="popup-comment-box">
    <reply-header :index="index" :message="message"></reply-header>
    <reply-content  :index="index" :message="message"></reply-content>
  </div>
</template>

<script>
import ReplyHeader from './comp/ReplyHeader'
import ReplyContent from './comp/ReplyContent'
export default {
  components:{
    ReplyHeader,
    ReplyContent,
  },
  methods:{
   
  },
  props:[
    'message',
    'index'
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