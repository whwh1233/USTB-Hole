<template>
  <div>
    <div class="img-group">
      <a href="">
        <slot name="img"></slot>
        <slot name="img-text"></slot>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.img-group {
  width: max-content;
}
.img-group a {
  display: flex;
  height: 30px;
  margin: 10px 5px;
  text-decoration: none;
}
.img-group span {
  color: #2c3e50;
  font-size: 18px;
  height: 30px;
  line-height: 30px;
  display: block;
}
.img-group img{
  width: 30px;
  height: 30px;
}

</style>