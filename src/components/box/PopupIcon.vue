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
.popup-item-group{
  width:90%;
  height: 0.4rem;
  background-color:lightyellow;
  display: flex;
  margin: 0.2rem auto;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  border-radius: 0.05rem;
}
.popup-item {
  width: fit-content;
  flex:1;
}
.popup-item span{
  font-weight: 550;
  line-height: 0.4rem;
  height: 0.4rem;
  margin: 0.01rem;
  vertical-align: middle;
}
.popup-item img {
  width: 0.25rem;
  height: 0.25rem;
  vertical-align: middle;
}

</style>