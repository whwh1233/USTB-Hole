<template>
  <div>
    <van-sticky>
    <div class="control-group">
      <img-group>
        <template v-slot:img><img src="~@/static/img/refresh.png" alt=""></template>
        <template v-slot:img-text><span>最新</span></template>
      </img-group>
      <img-group v-if="isLogin">
        <template v-slot:img><img src="~@/static/img/focus.png" alt=""></template>
        <template v-slot:img-text><span>关注</span></template>
      </img-group>
      <input type="text" placeholder="搜索 或 #PID " class="control-search">
      <img-group v-if="!isLogin" @click="change">
        <template v-slot:img ><img src="~@/static/img/login.png" alt=""></template>
        <template v-slot:img-text><span>登录</span></template>
      </img-group>
      <img-group v-else>
        <template v-slot:img><img src="~@/static/img/my.png" alt=""></template>
        <template v-slot:img-text><span>账户</span></template>
      </img-group>
      <img-group  v-if="isLogin">
        <template v-slot:img><img src="~@/static/img/publish.png" alt=""></template>
        <template v-slot:img-text><span>发表</span></template>
      </img-group>
    </div>
    </van-sticky>
    
  </div>
</template>
<script>
import ImgGroup from './ImgGroup'
export default {
  components:{
    ImgGroup
  },
  data() {
    return {
      isLogin:false
    }
  },
  methods:{
    change() {
      this.isLogin = !this.isLogin
      console.log(this.isLogin)
      console.log('点击触发')
    }
  }
}
</script>


<style scoped>
.control-group{
  display: flex;
  justify-content: center;
  background-color: hsla(0,0%,100%,.8);

}
.control-search {
    border-radius: 5px;
    border: 1px solid #000;
    outline: none;
    min-width: 70%;
    height: 30px;
    margin: 10px;
}
.img-group span {
  color: #2c3e50;
  font-size: 17px;
  height: 30px;
  line-height: 30px;
  display: block;
}
.img-group img{
  width: 25px;
  height: 25px;
  margin: auto;
}
</style>