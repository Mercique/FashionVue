<template>
  <div class="home">
    <top />
    <sale />
    <product-cards />
    <delivery />
  </div>
</template>

<script>
import Top from "../components/Top.vue";
import Sale from "../components/Sale.vue";
import ProductCards from '../components/ProductCards.vue';
import Delivery from '../components/Delivery.vue';

export default {
  name: "HomePage",
  components: {
    Top,
    Sale,
    ProductCards,
    Delivery,
  },
};
</script>

<style lang="scss" scoped></style>
