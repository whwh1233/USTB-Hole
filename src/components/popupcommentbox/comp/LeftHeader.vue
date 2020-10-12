<template>
  <div>
    <div class="left-header">
      <span class="box-id header-item"><a href="">#{{message.id}}</a></span>
      <span class="header-item">距离目前的时间</span>
      <span class="header-item">{{message.send_time| dateFormat}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'message'
  ]
}
</script>

<style scoped>
.left-header{
  width: fit-content;
  float: left;
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
</style>