<template>
  <div>
    <div class="right-header">
      <span class="header-icon"><span>0</span><img src="~@/static/img/comment.png" alt=""></span>
      <span class="header-icon"><span>0</span><img src="~@/static/img/favorites.png" alt=""></span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.right-header{
  width: fit-content;
  float:right;
  position: absolute;
  right: 0;
}
.header-icon{
  margin: 0 10px;
}
.header-icon span{
  font-size: 13.5px;
  font-weight: 600;
  vertical-align: middle;
  margin: 0 3px;
}
.header-icon img{
  height: 20px;
  width: 20px;
  vertical-align: middle;
}
</style>