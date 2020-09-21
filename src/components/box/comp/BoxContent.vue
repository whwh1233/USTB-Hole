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
    'message'
  ]
}
</script>

<style scoped>
.box-content{
  text-align: left;
  margin: 10px 0;
  margin-left: 20px;
}
</style>