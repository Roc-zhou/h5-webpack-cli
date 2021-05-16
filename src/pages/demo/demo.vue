<template>
  <div class='app'>
    hello word
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: 'app',
  data() {
    return {};
  },
}
</script>
<style scoped>

</style>