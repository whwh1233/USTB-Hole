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
        <div class="popup-item-group">
          <div class="popup-item">
            <img src="~@/static/img/check.png" alt="">
            <span>举报</span>
          </div>
          <div class="popup-item">
            <img src="~@/static/img/refresh.png" alt="">
            <span>刷新</span>
          </div>
          <div class="popup-item">
            <img src="~@/static/img/reverse.png" alt="">
            <span>逆序</span>
          </div>
          <div class="popup-item">
            <img src="~@/static/img/favorites.png" alt="">
            <span>未关注</span>
          </div>
        </div>
        <popup-box  :message="messages[currentIndex]"></popup-box>
        <!-- <div class="popup-content-group">
          <div class="popup-content-header">
            <div class="popup-content-header-left">
              <span class="box-id box-header-item"><a href="">#12333</a></span>
              <span class="box-header-item">距离目前的时间</span>
              <span class="box-header-item">time</span>
              <span class="popup-content-header-item">clock</span>
            </div>
            <div class="popup-content-header-right">
              <span class="popup-content-header-icon">
                <img src="~@/static/img/comment.png" alt="">
              </span>            
              <span class="popup-content-header-icon">
                <img src="~@/static/img/favorites.png" alt="">
              </span>
            </div>
          </div>
          <div class="popup-content">
            <p class="popup-inner-content">
              今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗 这下是不是就超过了可以的这是第三行
            </p>
          </div>
        </div> -->
        <!-- comment显示 -->
        <div class="comment-group">
          <ul>
            <li v-for="(item,index) in messages[currentIndex].comments" :key="index">
              <popup-comment-box :message="item"></popup-comment-box>  
            </li>
          </ul>
        </div>
        <!-- 输入框显示 -->
        <div class="input-group">
            <input type="text" class="input-self" placeholder="请输入你想要的发表的留言">
            <button class="input-button">
              <img src="~@/static/img/send.png" alt="">
            </button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Box from './box/Box'
import PopupBox from './box/PopupBox'
import PopupCommentBox from './box/PopupCommentBox'
export default {
  components:{
    Box,
    PopupBox,
    PopupCommentBox
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
.comment-detail  {
  padding: 10px 0;
  font-size: 15px;
  margin-left: 20px;
  text-align: left;
}
.comment-box{
  width:90%;
  height: fit-content;
  min-height: 40px;
  background-color:lightyellow;
  display: flex;
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  border-radius: 5px;
}

.input-button img{
  height: 30px;
  width: 30px;
  color: white;
}
.input-button{
  
  width: 5%;
  height: 45px;
  display: block;
  margin:  auto;
}
.input-self{
  outline-style: none;
  border: 1px solid #ccc; 
  border-radius: 3px;
  padding: 30px 0px;
  width: 85%;
  margin-left: 20px;
}
input:focus{
    border-color: lightyellow;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(230, 231, 167, 0.904);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(230, 231, 167, 0.904)
}
.input-group{
  width:90%;
  height: 100px;
  background-color:lightyellow;
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  border-radius: 5px;
  display: flex;
  padding: 10px 0;
}
.popup-inner-content{
  width: 95%;
}
.popup-content {
  width: 100%;
  text-align: left;
  margin-top: 10px;
  float: left;
  margin-left: 20px;
}
.popup-content-header {
  position: relative;
  width: 100%;
  padding-top: 10px;
  overflow: hidden;
  height: 20px;
}
.popup-content-header-left {
  position: absolute;
  float: left;
  padding-left: 20px;
}
.popup-content-header-right {
  position: absolute;
  float: right;
  right: 0;
  padding-right: 20px;
}
.popup-content-header-icon img{
  width:20px;
  height:20px;
  margin: 0 5px;
}
.popup-content-group{
  width:90%;
  height: 100px;
  background-color:lightyellow;
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  border-radius: 5px;
  overflow: hidden;
}
.popup-item {
  width: fit-content;
  flex:1;
}

.popup-item span{
  font-weight: 550;
  line-height: 40px;
  height: 40px;
  margin: 1px;
  vertical-align: middle;

}
.popup-item img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.popup-item-group{
  width:90%;
  height: 40px;
  background-color:lightyellow;
  display: flex;
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  border-radius: 5px;

}
.popup{
  background-color:#fff;
  width: 100%;
}
.popup-title{
  height: 50px;
  display: flex;
  /* background-color: hsla(0,0%,100%,.6); */
  box-shadow: 0 3px 5px rgba(0,0,0,.2);
}
.popup-title-img{
  margin: auto 5px;
}
.popup-title-id {
  margin: auto 10px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 600;
}
.content-group{
  overflow: hidden;
  display: inline;
}


</style>