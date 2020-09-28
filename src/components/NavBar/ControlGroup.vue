<template>
  <div>
    <van-sticky>
    <div class="control-group">
      <img-group>
        <template v-slot:img><img src="~@/static/img/refresh.png" alt=""></template>
        <template v-slot:img-text><span>最新</span></template>
      </img-group>
      <img-group v-if="$store.state.isLogin">
        <template v-slot:img><img src="~@/static/img/focus.png" alt=""></template>
        <template v-slot:img-text><span>关注</span></template>
      </img-group>
      <input type="text" placeholder="搜索 或 #PID " class="control-search">
      <img-group v-if="!$store.state.isLogin" >
        <template v-slot:img ><img src="~@/static/img/login.png" alt=""  @click.prevent="change"></template>
        <template v-slot:img-text><span  @click.prevent="change">登录</span></template>
      </img-group>
      <img-group v-else>
        <template v-slot:img><img src="~@/static/img/my.png" alt=""></template>
        <template v-slot:img-text><span>账户</span></template>
      </img-group>
      <img-group  v-if="$store.state.isLogin">
        <template v-slot:img><img src="~@/static/img/publish.png" alt=""  @click.prevent="publish"></template>
        <template v-slot:img-text><span  @click.prevent="publish">发表</span></template>
      </img-group>
    </div>
    </van-sticky>
    <van-popup v-model="showLogin" >
      <div  class="login-title"> 
        <span>欢迎来到USTB Hole</span>
      </div>
      <div>
        <van-form @submit="onLogin">
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              进入树洞！
            </van-button>
          </div>
        </van-form>
      </div>
    </van-popup>
    <van-popup v-model="showPublish" class="publish-popup">
      <div class="publish-title">
        <span>发表树洞</span>
      </div>
      <van-form @submit="onPublish">
        <van-field
        v-model="content"
        autosize
        type="textarea"
        rows="8"
        name="content"
        label="树洞"
        placeholder="树洞"
        style="fontSize:0.2rem"
        :rules="[{ required: true, message: '输入你想说的话吧~' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            发表
          </van-button>
        </div>
      </van-form>      
    </van-popup>
  </div>
</template>
<script>
import ImgGroup from './ImgGroup'

import { request } from '@/network/request.js' 

export default {
  components:{
    ImgGroup,
  },
  data() {
    return {
      showLogin:false,
      showPublish:false,
      username:'',
      password:'',
      content:''
    }
  },
  methods:{
    onPublish(values) {
      console.log(values)
      request({
        url:'/publish',
        method:'POST',
        data:{
          content:values.content
        },
        
      }).then(res => {
        console.log(res.data)
        if(res.data === 'publish success'){
          console.log('发表成功')
          this.showPublish = false
          this.$toast.success('发表成功 请刷新');
        }
        else{
          console.log('发表失败')
          this.$toast.fail('发表失败 请重试！');
        }
      }).catch(err => {
        console.log('发表err')
      })
    },
    onLogin(values) {
      console.log('submit', values);
      request({
        url:'/users',
        methods:'GET',
        params:{
          username:values.username,
          password:values.password
        }
      }).then(res => {
        console.log(res.data)
        if(res.data === 'login success'){
          this.showLogin = false
          this.$store.state.isLogin = true
        }else if(res.data === 'wrong password'){
          console.log('密码错误')
          this.$toast.fail('密码错误，请重新输入');
        }
      }).catch(err => {
        console.log(err)
        console.log('请重新输入')
        this.$toast.fail('账号不存在！');

      })
    },
    change() {
      this.showLogin = true
    },
    publish() {
      console.log('开始发表树洞')
      this.showPublish = true
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
.login-title{
  margin: 0.2rem 1.1rem;
}
.login-title span {
  font-size: 0.2rem;
}
.publish-title {
  margin: 0.2rem 1.1rem;
}
.publish-title span {
  font-size: 0.28rem;
}
.publish-popup{
  width: 40%;
}
</style>