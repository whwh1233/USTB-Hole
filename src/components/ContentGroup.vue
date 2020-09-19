<template>
  <div>
      <ul>
      <li v-for="(message,index) in messages " :key="index">
        <div class="content-group">
          <div class="box" >
            <div class="box-header">
              <span class="box-id box-header-item"><a href="">#{{message.id}}</a></span>
              <span class="box-header-item">距离目前的时间</span>
              <span class="box-header-item">{{message.time}}</span>
              <span class="box-header-item box-clock">{{message.clock}}</span>
              <span class="box-header-icon">
                <img src="~@/static/img/favorites.png" alt="">
              </span>
            </div>
            <div class="box-content">
              {{message.content}}
            </div>
          </div>
        </div>
      </li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      messages:[
        {
          id:343434,content:'今天我是第一条树洞',time:'2020-9-16',clock:'09:27',
          comments:{
            
          }
        },{
          id:343435,content:'今天我是第二条树洞',time:'2020-9-16',clock:'14:22'
        },{
          id:343436,content:'今天我是第三条树洞，今天是做树洞的第二天 nice 如果我多写一些内容，看一看是不是会超过这个文本框，我去 还没有到第二行吗 这下是不是就超过了可以的这是第三行',time:'2020-9-16' ,clock:'19:45'
        }
      ],
    }
  }
}
</script>

<style scoped>
  .content-group{
  overflow: hidden;
  display: inline;
}
.box {
  margin-top: 30px;
  width: 600px;
  margin-left: 50px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  overflow: hidden;
}
.box-header {
  font-size: 13px;
  float: left;
  margin-top: 10px;
  margin-left: 20px;
  
  overflow: hidden;
}

.box-id {
  padding-left: 10px;
}
.box-id a {
  color: blue;
  text-decoration: none;
}

.box-clock {
  margin-right: 280px;
}
.box-header-item {
  padding: 5px;
}
.box-header-icon img {
  float: right;
  width: 18px;
  height: 18px;
}

.box-content {
  text-align: left;
  margin-top: 25px;
  margin-left: 15px;
  padding: 10px 0 ;
  font-size: 15px;
}
</style>