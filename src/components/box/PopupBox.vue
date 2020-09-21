<template>
  <div class="popup-box">
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
.popup-box {
  
  width: 90%;
  margin: 20px auto;
  background-color: lightyellow;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  overflow: hidden;
}


</style>