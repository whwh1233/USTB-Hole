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
.input-group{
  width:90%;
  height: 1rem;
  background-color:lightyellow;
  margin: 0.2rem auto;
  box-shadow: 0 0.02rem 0.05rem rgba(0,0,0,.4);
  border-radius: 0.05rem;
  display: flex;
  padding: 0.1rem 0;
}
.input-button img{
  height: 0.3rem;
  width: 0.3rem;
  color: white;
  vertical-align: middle;
}
.input-button{
  width: fit-content;
  height: 0.45rem;
  display: block;
  margin:auto;
  padding: 0 0.1rem;
}
.input-self{
  outline-style: none;
  border: 0.01rem solid #ccc; 
  border-radius: 0.03rem;
  padding: 0.3rem 0;
  width: 75%;
  margin-left: 0.2rem;
}
input:focus{
    border-color: lightyellow;
    outline: 0;
    -webkit-box-shadow: inset 0 0.01rem 0.01rem rgba(0,0,0,.075),0 0 0.08rem rgba(230, 231, 167, 0.904);
    box-shadow: inset 0 0.01rem 0.01rem rgba(0,0,0,.075),0 0 0.08rem rgba(230, 231, 167, 0.904)
}

</style>