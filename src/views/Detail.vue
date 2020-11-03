<template>
  <div>
    <h2>detail page</h2>
    <p>{{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
name: "Detail",
  watch: {
    $route: {
      handler: () => {
        console.log("详情页获取");
      },
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>