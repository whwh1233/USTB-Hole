<template>
  <div id="app">
    <nav-bar></nav-bar>
    <content-group></content-group>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar'
import ContentGroup from '@/components/ContentGroup'
import { request } from '@/network/request.js' 

export default {
  components:{
    ContentGroup,
    NavBar
  },
  data () {
    return {
      message:'正在请求',
      content:'这里是树洞的内容',
      reply:'这里是评论的内容'
    }
  },
  methods:{
    getinfo() {
      request({
        url:'/users'
      }).then(res => {
        console.log(res)
        this.message = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    getContent() {
      request({
        url:'/content'
      }).then(res => {
        this.content = res.data,
        console.log(res)
      }).catch(err => 
        console.log(err)
      )
    },
    getReply() {
      request({
        url:'/reply'
      }).then(res => {
        this.reply = res.data,
        console.log(res)
      }).catch(err => 
        console.log(err)
      )
    },
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url('./static/img/gbp.jpg') no-repeat 0 -2rem;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  font-size: 0.16rem;
  min-height: 1090px;
}

</style>
