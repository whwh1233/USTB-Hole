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
      <img-group v-if="!isLogin" @click.prevent="change">
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
      // this.isLogin = !this.isLogin
      // console.log(this.isLogin)
      // console.log('点击触发')
    }
  }
}
</script>


<style scoped>
input::-webkit-input-placeholder {
    /* placeholder字体大小 */
    font-size: 0.16rem;
}

.control-group{
  display: flex;
  justify-content: center;
  background-color: hsla(0,0%,100%,.8);
}
.control-search {
    border-radius: 0.05rem;
    border: 0.01rem solid #000;
    outline: none;
    min-width: 60%;
    height: 0.3rem;
    margin: 0.1rem;
    vertical-align: middle;
}
.img-group{
  vertical-align: middle;
}
.img-group span {
  color: #2c3e50;
  font-size: 0.17rem;
  height: 0.3rem;
  line-height: 0.3rem;
  vertical-align: middle;
}
.img-group img{
  width: 0.25rem;
  height: 0.25rem;
  vertical-align: middle;

}
</style>