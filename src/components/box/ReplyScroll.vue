<template>
  <div>
    <div :class='"wrapper"+index' class="scroll-wrapper">
      <ul class="scroll-content">
        <li v-for="(reply,index) in comments" :key="index" class="reply-li">
          <div class="reply-item">
            <div class="box-header">               
              <div class="left-header">
                <span class="box-id header-item"><a href=""> [{{$store.state.name[index]}}]</a></span>
                <span class="header-item">{{reply.send_time| dateFormat}}</span>
              </div>
              <div class="right-header">
                <span class="header-icon"><span>{{reply.favorites}}</span><img src="~@/static/img/favorites.png" alt=""></span>
              </div>
            </div> 
            <div class="box-content">
              {{reply.content}}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { request } from '@/network/request.js' 
import PopupCommentBox from '../popupcommentbox/PopupCommentBox'

export default {
  props:[
    'index',
    'id'
  ],
  components:{
    PopupCommentBox
  },
  data() {
    return {
      replys:[{id:1,content:'yse'},
      {id:2,content:'yse'},{id:4,content:'yse'},{id:65,content:'yse'},{id:6,content:'yse'},{id:8,content:'yse'},{id:8,content:'yse'},
      ],
      comments:[]
    }
  },
  created() {
    // console.log(this.index+ '已经被创建 id是' + this.id)
    const req_url = '/reply/' + this.id
    request({
        url:req_url
      }).then(res => {
        this.comments = res.data
        // console.log(this.comments)
      }).catch(err =>
        console.log(err)
      )

  },
  mounted() {
    const name = '.wrapper' + this.index 
    let bs = new BScroll(name, {
        pullUpLoad: true,
        wheel: true,
        scrollbar: true,
        scrollX:true,
        scrollY:false
    })
  }
}
</script>

<style>
.scroll-wrapper{
  margin-top: 0.4rem;
  width: 9rem;
  margin-left: -0.05rem;
  background-color: lightyellow;
  border-radius: 0.05rem;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  overflow: hidden;
}

.scroll-content {
  width: 1900px;
  overflow: hidden;
  white-space: nowrap;
}
.reply-li{

  display: inline-block;
  margin-left: -0.05rem;
}
.reply-item{
  width: fit-content;
  margin: 0;
  background-color: lightyellow;
  border-radius: 0.05rem;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  overflow: hidden;
}
.box-header{
  padding-top: 0.1rem;
  padding-left: 0.2rem;
  display: flex;
  position: relative;
}
.left-header{
  width: fit-content;
  float: left;
  margin-right: 0.6rem;
}
.left-header span {
  font-size: 0.132rem;
  
}
.header-item{
  flex: 1;
  margin: 0 0.05rem;
}
.header-item a{
  color: blue;
}

.right-header{
  width: fit-content;
  float:right;
  position: absolute;
  right: 0;
}
.header-icon{
  margin: 0 0.1rem;
  vertical-align: middle;

}
.header-icon span{
  font-size: 0.135rem;
  font-weight: 600;
  vertical-align: middle;
  margin: 0 0.03rem;
}
.header-icon img{
  height: 0.2rem;
  width: 0.2rem;
  vertical-align: middle;
  padding-bottom: 0.03rem;
}

.box-content{
  text-align: left;
  margin: 0.1rem 0.1rem 0.1rem 0.2rem;
}
</style>