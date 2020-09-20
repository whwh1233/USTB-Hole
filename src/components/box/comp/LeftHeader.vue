<template>
  <div>
    <div class="left-header">
      <span class="box-id header-item"><a href="">#0000000</a></span>
      <span class="header-item">距离目前的时间</span>
      <span class="header-item">具体发表日期</span>
      <span class="header-item">具体发表时间</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.left-header{
  width: fit-content;
  float: left;
}
.left-header span {
  font-size: 13.2px;
  
}
.header-item{
  flex: 1;
  margin: 0 5px;
}
.header-item a{
  color: blue;
}
</style>