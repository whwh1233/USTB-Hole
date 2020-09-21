<template>
  <div>
    <div class="input-group">
            <input type="text" class="input-self" placeholder="请输入你想要的发表的留言">
            <button class="input-button">
              <img src="~@/static/img/send.png" alt="">
            </button>
        </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.input-button img{
  height: 30px;
  width: 30px;
  color: white;
}
.input-button{
  
  width: 5%;
  height: 45px;
  display: block;
  margin:  auto;
}
.input-self{
  outline-style: none;
  border: 1px solid #ccc; 
  border-radius: 3px;
  padding: 30px 0px;
  width: 85%;
  margin-left: 20px;
}
input:focus{
    border-color: lightyellow;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(230, 231, 167, 0.904);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(230, 231, 167, 0.904)
}
.input-group{
  width:90%;
  height: 100px;
  background-color:lightyellow;
  margin: 20px auto;
  box-shadow: 0 2px 5px rgba(0,0,0,.4);
  border-radius: 5px;
  display: flex;
  padding: 10px 0;
}
</style>