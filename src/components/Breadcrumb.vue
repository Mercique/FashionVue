<template>
  <div class="breadcrumb center">
    <h2 class="breadcrumb__heading">{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
    heading: String,
  },
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  height: 148px;
  display: flex;
  align-items: center;
  background: #F8F3F4;
  &__heading {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #F16D7F;
  }
}
</style>