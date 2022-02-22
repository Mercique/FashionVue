<template>
  <router-link to="/cart" class="goto-cart-btn">Go To Cart</router-link>
</template>

<script>
export default {
  name: "ButtonGoToCart",
};
</script>

<style lang="scss" scoped>
.goto-cart-btn {
  display: flex;
  justify-content: center;
  padding: 15px 0;
  font-weight: 700;
  font-size: 20px;
  border: 1px solid #f26376;
  color: #fff;
  background: #f26376;
  transition: all 0.3s ease;
}
</style>
