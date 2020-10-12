<template>
  <div class="box">
    <h2>我是whole-box</h2>
    <!-- <box-header :message="message"></box-header>
    <box-content :message="message"></box-content> -->
  </div>
</template>

<script>


export default {
  props:[
    'isPopup',
    'isReply',
    'isIndex'
  ],
  mounted() {
    console.log('这是isIndex:' + this.isIndex)
    console.log('这是isPopup:' + this.isPopup)
    console.log('这是isReply:' + this.isReply)
  }
  //types 为1时，表示首页的展示 默认为1  首页的展示
  // 为2时，表示弹出栏的展示
  // 为3时，表示首页评论栏的展示
  // 为4时，表示弹出评论栏的展示
}
</script>

<style scoped>
.box {
  margin-top: 0.3rem;
  width: 6rem;
  margin-left: 0.5rem;
  background-color: #fff;
  border-radius: 0.05rem;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  overflow: hidden;
}
</style>