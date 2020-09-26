<template>
  <div>
    <div class="box-content">
      {{this.$store.state.messageDetail.content}}
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.box-content{
  text-align: left;
  margin: 0.1rem 0.1rem 0.1rem 0.2rem;
}
</style>