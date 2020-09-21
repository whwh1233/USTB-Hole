<template>
  <div>
    <div class="comment-right-header">
      <span class="header-icon"><span>{{message.commentnum}}</span><img src="~@/static/img/favorites.png" alt=""></span>
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
.comment-right-header{
  width: fit-content;
  float:right;
  position: absolute;
  right: 0;
}
.header-icon{
  margin: 0 10px;
  vertical-align: middle;

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
  padding-bottom: 3px;
}
</style>