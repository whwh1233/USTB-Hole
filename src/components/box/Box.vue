<template>
  <div class="box" @click="change">
    <box-header></box-header>
    <box-content></box-content>
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
  }
}
</script>

<style scoped>


</style>