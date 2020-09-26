<template>
  <div>
    <div class="popup-title">
          <span class="popup-title-id">
            树洞 #{{this.$store.state.messageDetail.id}}
          </span>
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
.popup-title{
  height: 0.5rem;
  display: flex;
  box-shadow: 0 0.03rem 0.05rem rgba(0,0,0,.2);
}
.popup-title span {
  font-size: 0.25rem;
  line-height: 0.5rem;
  height: 0.5rem;
  font-weight: 600;
  margin-left: 0.2rem;
}

</style>