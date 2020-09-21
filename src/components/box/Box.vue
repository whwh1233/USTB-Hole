<template>
  <div class="box">
    <box-header :message="message"></box-header>
    <box-content :message="message"></box-content>
  </div>
</template>

<script>
import BoxHeader from './comp/BoxHeader'
import BoxContent from './comp/BoxContent'
export default {
  components:{
    BoxHeader,
    BoxContent
  },
  methods:{
    change() {
      console.log('box被点击')
      this.$emit('change-popup')
    }
  },
  props:[
    'message'
  ]
}
</script>

<style scoped>
.box {
  margin-top: 0.3rem;
  width: 6rem;
  margin-left: 0.5rem;
  background-color: #fff;
  border-radius: 0.05rem;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  overflow: hidden;
}


</style>