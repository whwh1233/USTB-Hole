<template>
  <div>
    <div class="right-header">
      <span class="header-icon"><span>{{message.comments}}</span><img src="~@/static/img/comment.png" alt=""></span>
      <span class="header-icon"><span>{{message.favorites}}</span><img src="~@/static/img/favorites.png" alt=""></span>
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
.right-header{
  width: fit-content;
  float:right;
  position: absolute;
  right: 0;
}
.header-icon{
  margin: 0 0.1rem;
  vertical-align: middle;

}
.header-icon span{
  font-size: 0.135rem;
  font-weight: 600;
  vertical-align: middle;
  margin: 0 0.03rem;
}
.header-icon img{
  height: 0.2rem;
  width: 0.2rem;
  vertical-align: middle;
  padding-bottom: 0.03rem;
}
</style>