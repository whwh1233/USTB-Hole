<template>
  <div>
    <ul>
      <li v-for="(message,index) in messages" :key="index">
        <box @change-popup="doSomething" :message="message" @click.native="showDetail(index,message)"></box>
      </li>
    </ul>
    <van-popup v-model="isShow" position="right" :style="{height:'100%',width:'60%',opacity:0.8}" >
      <div class="popup">
        <div class="popup-title">
          <span class="popup-title-id">
            树洞 #{{messages[currentIndex].id}}
          </span>
        </div>
        <popup-icon></popup-icon>
        <popup-box  :message="messages[currentIndex]"></popup-box>
        <div class="comment-group">
          <ul>
            <li v-for="(item,index) in messages[currentIndex].comments" :key="index">
              <popup-comment-box :message="item"></popup-comment-box>  
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
export default {
  components:{
    Box,
    PopupBox,
    PopupCommentBox,
    PopupTitle,
    PopupIcon,
    PopupInput
  },
  data() {
    return {
      currentIndex:0,
      name:['Alice','Bob','Carol','Dave','Eve','Francis','Grace','Hans','Isabella','Jason','Kate','Louis','Margaret','Nathan',
      'Olivia','Paul','Richard','Susan','Thomas','Uma','Vivian','Winnie','Xander','Yasmine','Zach'],
      value: '',
      isShow:false,
      
      messages:[
        {
          id:343434,content:'今天我是第一条树洞',time:'2020-9-16',clock:'09:27',favorites:3,commentnum:5,
          comments:[
            {content:'确实确实确实确实确实',id:'34353637',time:'2020-9-10',clock:'22:22',target:"none"},
            {content:'芜湖芜湖芜湖芜湖',id:'34353637',time:'2020-9-10',clock:'22:22',target:"none"},
            {content:'yysyqsyysyqsyysyqs',id:'34353637',time:'2020-9-10',clock:'22:22',target:"none"},
            {content:'yydsyydsyyds',id:'34353637',time:'2020-9-10',clock:'22:22',target:"none"}
          ]
        },{
          id:343435,content:'今天我是第二条树洞',time:'2020-9-16',clock:'14:22',favorites:6,commentnum:5,
          comments:[
            {content:'确实确实确实确实确实',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'芜湖芜湖芜湖芜湖',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yysyqsyysyqsyysyqs',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yydsyydsyyds',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"}
          ]
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
          comments:[
            {content:'确实确实确实确实确实',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'芜湖芜湖芜湖芜湖',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yysyqsyysyqsyysyqs',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yydsyydsyyds',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"}
          ]
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
          comments:[
            {content:'确实确实确实确实确实',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'芜湖芜湖芜湖芜湖',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yysyqsyysyqsyysyqs',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yydsyydsyyds',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"}
          ]
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
          comments:[
            {content:'确实确实确实确实确实',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'芜湖芜湖芜湖芜湖',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yysyqsyysyqsyysyqs',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yydsyydsyyds',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"}
          ]
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
          comments:[
            {content:'确实确实确实确实确实',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'芜湖芜湖芜湖芜湖',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yysyqsyysyqsyysyqs',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yydsyydsyyds',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"}
          ]
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
          comments:[
            {content:'确实确实确实确实确实',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'芜湖芜湖芜湖芜湖',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yysyqsyysyqsyysyqs',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yydsyydsyyds',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"}
          ]
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
          comments:[
            {content:'确实确实确实确实确实',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'芜湖芜湖芜湖芜湖',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yysyqsyysyqsyysyqs',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"},
            {content:'yydsyydsyyds',id:'34353637',time:'2020-9-10',clcok:'22:22',target:"none"}
          ]
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗这下是不是就超过了可以的这是第三行再来一行 争取能够到第四行看看是什么效果',time:'2020-9-16' ,clock:'19:45',
          favorites:10,commentnum:2,
        }
      ],
      
    }
  },
  methods:{
    showPopup(index) {
      this.isShow = true
      console.log(this.isShow)
      console.log(index + '被点击')
    },
    doSomething() {
      this.isShow = !this.isShow
      console.log(this.isShow)
    },
    showDetail(index) {
      console.log('展示该细节' + index),
      this.currentIndex = index
      this.isShow = true
    }
  }
}
</script>

<style scoped>
.popup-title{
  height: 50px;
  display: flex;
  box-shadow: 0 3px 5px rgba(0,0,0,.2);
}
.popup-title span {
  font-size: 25px;
  line-height: 50px;
  height: 50px;
  font-weight: 600;
  margin-left: 20px;
}


</style>