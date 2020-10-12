<template>
  <div>
    <div class="box-header">
      <div class="left-header">
        <span class="box-id header-item"><a href=""> [{{$store.state.name[index]}}]</a></span>
        <span class="header-item">距离目前的时间</span>
        <span class="header-item">{{message.send_time| dateFormat}}</span>
      </div>
      <div class="right-header">
        <span class="header-icon"><span>{{message.favorites}}</span><img src="~@/static/img/favorites.png" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script>
import LeftHeader from './LeftHeader'
import RightHeader from './RightHeader'
export default {
  components:{
    LeftHeader,
    RightHeader
  },
  props:[
    'message',
    'index'
  ]
}
</script>

<style scoped>
.box-header{
  padding-top: 0.1rem;
  padding-left: 0.2rem;
  display: flex;
  position: relative;
}
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