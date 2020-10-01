<template>
  <div>
    <ul>
      <li v-for="(message,index) in content" :key="index" class="wrapper-box">
        <box :message="message" @click.native="showDetail(message)"></box>
        <reply-scroll></reply-scroll>
      </li>
    </ul>
    <div class="wrapper"  ref="scroll">
          <ul class="scroll-content">
            <li v-for="(reply,index) in replys" :key="index">
              <div class="reply-item">
                {{reply.id + reply.content}}
              </div>
            </li>
          </ul>
        </div>
    <van-popup v-model="isShow" position="right" :style="{height:'100%',width:'60%',opacity:0.8}" >
      <div class="popup">
        <popup-title></popup-title>
        <popup-icon></popup-icon>
        <popup-box></popup-box>
        <div class="comment-group">
          <ul>
            <li v-for="(item,index) in $store.state.replyDetail" :key="index">
              <popup-comment-box  :message="item" :index="index"></popup-comment-box>  
            </li>
          </ul>
        </div>
        <popup-input></popup-input>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Box from './box/Box'
import PopupBox from './box/PopupBox'
import PopupTitle from './box/PopupTitle'
import PopupIcon from './box/PopupIcon'
import PopupInput from './box/PopupInput'
import PopupCommentBox from './box/PopupCommentBox'
import ReplyScroll from '././box/ReplyScroll'
import BScroll from '@better-scroll/core'


import { mapMutations } from 'vuex'

import { request } from '@/network/request.js' 
export default {
  components:{
    Box,
    PopupBox,
    PopupCommentBox,
    PopupTitle,
    PopupIcon,
    PopupInput,
    ReplyScroll
  },
  created() {
      console.log('内容组件创建完成')
      request({
        url:'/content'
      }).then(res => {
        this.content = res.data,
        console.log(res.data)
      }).catch(err => 
        console.log(err)
      )
  },
  mounted() {
    console.log('mounted成功')
    let that = this
    if(this.$store.state.token){
      request({
        url:'/autologin',
        method:'post',
        headers:{'token':sessionStorage.getItem("userToken")}
      }).then(res => {
        console.log(res.data)
        this.$store.commit('autoTran',{userData:res.data})
      }).catch(err => {
        console.log(err)
      })
    }else{
      this.showLogin = true
    }

    this.init()
  },
  data() {
    return {
      isShow:false,
      content:[],
      replys:[{id:1,content:'yse'},
      {id:2,content:'yse'},{id:4,content:'yse'},{id:65,content:'yse'},{id:6,content:'yse'},{id:8,content:'yse'},{id:8,content:'yse'},
      ]
    }
  },
  methods:{
    init() {
      let bs = new BScroll('.wrapper', {
        pullUpLoad: true,
        wheel: true,
        scrollbar: true,
      })
    },
    showDetail(message) {
      console.log('展示' +  message.id + '细节'),
      this.isShow = true,
      this.$store.commit('changeMessage',message)
      console.log(this.$store.state.messageDetail),
      console.log('访问' +  message.id + '评论数据库')
      const req_url = '/reply/' + message.id
      request({
        url:req_url
      }).then(res => {
        console.log(res.data)
        this.$store.commit('changeReply',res.data)
      }).catch(err =>
        console.log(err)
      )
    }
  }
}
</script>

<style scoped>
.wrapper-box{
  display: flex;
}
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