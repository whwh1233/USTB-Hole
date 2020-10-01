<template>
  <div>
    <div class="box-content">
      {{message.content}}
    </div>
  </div>
</template>

<script>
export default {
  props:[
    'index',
    'message'
  ]
}
</script>

<style scoped>
.box-content{
  text-align: left;
  margin: 0.1rem 0.1rem 0.1rem 0.2rem;
}
</style>