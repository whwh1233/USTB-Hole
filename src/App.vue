<template>
  <div id="app">
    <nav-bar></nav-bar>
    <content-group></content-group>
    <button @click="getinfo">点击获取数据库内容</button>
    <button @click="getContent">点击获取树洞内容</button>

    <div>
      {{message}}
    </div>
    <span>------------------------</span>
    <div>
      {{content}}
    </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar'
import ContentGroup from '@/components/ContentGroup'
import { request } from '@/network/request.js' 
import { user } from './network/getUser'
import { content } from './network/getContent'
export default {
  components:{
    ContentGroup,
    NavBar
  },
  data () {
    return {
      message:'正在请求',
      content:'这里是树洞的内容'
    }
  },
  methods:{
    getinfo() {
      request({
        url:'apii/user'
      }).then(res => {
        console.log(res)
        this.message = res.data.user
      }).catch(err => {
        console.log(err)
      })
    },
    getContent() {
      request({
        url:'apii/content'
      }).then(res1 => {
        this.content = res1.data.content,
        console.log(res1)
      }).catch(err1 => 
        console.log(err1)
      )
    }
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
