<template>
  <div>
    <ul>
      <li v-for="(message,index) in content" :key="index">
        <box :message="message" @click.native="showDetail(message)"></box>
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
              <popup-comment-box :message="item" :index="index"></popup-comment-box>  
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

import { mapMutations } from 'vuex'

import { request } from '@/network/request.js' 
export default {
  components:{
    Box,
    PopupBox,
    PopupCommentBox,
    PopupTitle,
    PopupIcon,
    PopupInput
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
  },
  data() {
    return {
      isShow:false,
      content:[],
    }
  },
  methods:{
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


</style>