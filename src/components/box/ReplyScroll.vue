<template>
  <div>
    <p>我是ReplyScroll组件</p>
    <div class="wrapper"  ref="scroll">
          <ul class="scroll-content">
            <li v-for="(reply,index) in replys" :key="index">
              <div class="reply-item">
                {{reply.id + reply.content}}
              </div>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  data() {
    return {
      replys:[{id:1,content:'yse'},
      {id:2,content:'yse'},{id:4,content:'yse'},{id:65,content:'yse'},{id:6,content:'yse'},{id:8,content:'yse'},{id:8,content:'yse'},
      ]
    }
  },
  mounted() {
    let bs = new BScroll('.wrapper', {
        pullUpLoad: true,
        wheel: true,
        scrollbar: true,
    })
  }
}
</script>

<style scoped>
.wrapper{
  margin-top: 0.3rem;
  width: 6rem;
  height: 150px;
  margin-left: 0.5rem;
  background-color: yellow;
  border-radius: 0.05rem;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  overflow: hidden;
}

.scroll-content {
  
  overflow: hidden;
}
.reply-item{
  width:100px;
  background-color: grey;
  margin: 20px;
}
</style>