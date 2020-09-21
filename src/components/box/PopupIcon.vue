<template>
  <div>
    <div class="popup-item-group">
          <div class="popup-item">
            <img src="~@/static/img/check.png" alt="">
            <span>举报</span>
          </div>
          <div class="popup-item">
            <img src="~@/static/img/refresh.png" alt="">
            <span>刷新</span>
          </div>
          <div class="popup-item">
            <img src="~@/static/img/reverse.png" alt="">
            <span>逆序</span>
          </div>
          <div class="popup-item">
            <img src="~@/static/img/favorites.png" alt="">
            <span>未关注</span>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.popup-item {
  width: fit-content;
  flex:1;
}

.popup-item span{
  font-weight: 550;
  line-height: 40px;
  height: 40px;
  margin: 1px;
  vertical-align: middle;
}
.popup-item img {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
.popup-item-group{
  width:90%;
  height: 40px;
  background-color:lightyellow;
  display: flex;
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  border-radius: 5px;
}
</style>