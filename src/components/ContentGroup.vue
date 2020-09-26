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
        <!-- <div class="comment-group">
          <ul>
            <li v-for="(item,index) in content[currentIndex].comment" :key="index">
              <popup-comment-box :message="item"></popup-comment-box>  
            </li>
          </ul>
        </div> -->
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
        this.content = res.data
      }).catch(err => 
        console.log(err)
      )
  },
  data() {
    return {
      currentIndex:0,
      name:['Alice','Bob','Carol','Dave','Eve','Francis','Grace','Hans','Isabella','Jason','Kate','Louis','Margaret','Nathan',
      'Olivia','Paul','Richard','Susan','Thomas','Uma','Vivian','Winnie','Xander','Yasmine','Zach'],
      isShow:false,
      content:[],
      messageDetail:{}
    }
  },
  methods:{
    showDetail(message) {
      console.log('展示' +  message.id + '细节'),
      console.log(this.$store.state.currentID)
      this.$store.state.currentID = message.id
      console.log(this.$store.state.currentID)
      this.isShow = true,
      this.messageDetail = message
      this.$store.state.messageDetail = message
      console.log(this.$store.state.messageDetail)
    }
  }
}
</script>

<style scoped>


</style>