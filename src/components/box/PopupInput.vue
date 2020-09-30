<template>
  <div>
    <div class="input-group">
      <van-form @submit="onSubmit">
        <van-field
          v-model="reply"
          rows="3"
          autosize
          label="留言"
          type="textarea"
          maxlength="250"
          placeholder="请输入留言"
          show-word-limit
        />
        <div style="margin: 0.16rem;">
          <van-button round block type="info" native-type="submit">
            发表评论
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { request } from '@/network/request';
export default {
  data() {
    return {
      reply:''
    }
  },
  methods:{
    onSubmit() {
      console.log('按钮被点击')
      console.log(this.reply)
      console.log(this.$store.state.messageDetail.id)
      const values = {
        reply:this.reply,
        topic_id:this.$store.state.messageDetail.id,
        username:this.$store.state.currentUser
      }
      console.log(values)
      request({
        url:'/discuss',
        method:"POST",
        data:{
          values:values
        }
      }).then(res => {
        console.log(res.data)
        if(res.data === 'reply success'){
          this.$toast.success('回复成功 请刷新');
        }
        else{
          this.$toast.fail('回复失败 请重试！');
        }
      })
    }
  }
}
</script>

<style scoped>
.input-group{
  width:90%;
  height: fit-content;
  background-color:lightyellow;
  margin: 0.2rem auto;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  border-radius: 0.05rem;
  display: flex;
  padding: 0.1rem 0;
}
.input-button img{
  height: 0.3rem;
  width: 0.3rem;
  color: white;
  vertical-align: middle;
}
.input-button{
  width: fit-content;
  height: 0.45rem;
  display: block;
  margin:auto;
  padding: 0 0.1rem;
}
.input-self{
  outline-style: none;
  border: 0.01rem solid #ccc; 
  border-radius: 0.03rem;
  padding: 0.3rem 0;
  width: 75%;
  margin-left: 0.2rem;
}
input:focus{
    border-color: lightyellow;
    outline: 0;
    -webkit-box-shadow: inset 0 0.01rem 0.01rem rgba(0,0,0,.075),0 0 0.08rem rgba(230, 231, 167, 0.904);
    box-shadow: inset 0 0.01rem 0.01rem rgba(0,0,0,.075),0 0 0.08rem rgba(230, 231, 167, 0.904)
}

</style>