<template>
  <router-link to="/registration" class="goto-registration-btn">Registration</router-link>
</template>

<script>
export default {
  name: "ButtonGoToAuth",
};
</script>

<style lang="scss" scoped>
.goto-registration-btn {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  font-weight: 700;
  font-size: 20px;
  border: 1px solid #000;
  color: #fff;
  background: #000;
}
</style>