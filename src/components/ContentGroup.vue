<template>
  <div>
    <ul>
      <li v-for="(message,index) in content" :key="index" class="wrapper-box">
        <box :message="message" @click.native="showDetail(message)"></box>
        <reply-scroll :index="index" :id="message.id"></reply-scroll>
      </li>
    </ul>
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
    <div class="wholebox">
      <whole-box :isIndex="true" :isPopup="false" :isReply="false"></whole-box>
    </div>
  </div>
</template>

<script>
import Box from './box/Box'
import PopupBox from './popupbox/PopupBox'
import PopupTitle from './box/PopupTitle'
import PopupIcon from './box/PopupIcon'
import PopupInput from './box/PopupInput'
import PopupCommentBox from './popupcommentbox/PopupCommentBox'
import ReplyScroll from '././box/ReplyScroll'
import BScroll from '@better-scroll/core'
import WholeBox from './WholeBox'


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
    ReplyScroll,
    WholeBox
  },
  created() {
      // console.log('内容组件创建完成')
      request({
        url:'/content'
      }).then(res => {
        this.content = res.data
        // console.log(res.data)
      }).catch(err => 
        console.log(err)
      )
  },
  mounted() {
    // console.log('mounted成功')
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
      
    }
  },
  methods:{
    init() {
      
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
  width: 600px;
  height: 60px;
  margin-left: 0.5rem;
  background-color: yellow;
  border-radius: 0.05rem;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  overflow: hidden;
}

.scroll-content {
  width: 800px;
  white-space: nowrap;
}
.reply-li {
  display: inline-block;
  width:80px;
  background-color: grey;
  margin: 20px;
}

</style>