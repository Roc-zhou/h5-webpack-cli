<template>
  <div class='app'>
    hello word111
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    return next(vm => {});
  },
  name: 'app',
  created() {
  },
  data() {
    return {};
  },
}
</script>
<style scoped>
.app {
  color: red;
}
</style>