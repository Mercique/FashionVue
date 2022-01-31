<template>
  <div class="page-not-found">
    <img src="../assets/images/404/notfound.gif" alt="404">
    <h1 class="page-not-found-title">Error, page not found or in development!</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound",
}
</script>

<style lang="scss" scoped>
.page-not-found {
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #777;
  background: #fbfbfb;
  &-title {
    font-size: 40px;
  }
}
</style>