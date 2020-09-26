<template>
  <div>
    <div class="img-group">
      <slot name="img"></slot>
      <slot name="img-text"></slot>
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
  display: flex;
  height: 0.3rem;
  margin: 0.1rem 0.05rem;
  text-decoration: none;
}

.img-group span {
  color: #2c3e50;
  font-size: 0.18rem;
  height: 0.3rem;
  line-height: 0.3rem;
  display: block;
}
.img-group img{
  width: 0.3rem;
  height: 0.3rem;
}

</style>