<template>
  <section class="section">
    <h2 class="section__heading">Fetured Items</h2>
    <p class="section__p">
      Shop for items based on what we featured in this week
    </p>
    <p class="section__error" v-if="!cards.length">
      На данный момент товаров нет!
    </p>
    <add-product-cards :cards="currentElements" v-else />
    <div class="section__link">
      <a href="#" class="link">Browse All Product</a>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import AddProductCards from "./AddProductCards.vue";

export default {
  name: "ProductCards",
  components: { AddProductCards },
  computed: {
    ...mapGetters({ cards: "getCards" }),
    currentElements() {
      return this.cards.slice(0, 6);
    }
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding-top: 96px;
  &__heading {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #222222;
  }
  &__p {
    margin-top: 6px;
    margin-bottom: 48px;
    text-align: center;
    color: #9f9f9f;
  }
  &__error {
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #f16d7f;
  }
  &__link {
    display: flex;
    justify-content: center;
    .link {
      padding: 15px 39px;
      font-size: 16px;
      line-height: 19px;
      border: 1px solid #f26376;
      color: #f26376;
      transition: all .3s ease;
      &:hover {
        color: #fff;
        background-color: #F26376;
      }
      &:active {
        border-color: #57242b;
        background-color: #57242b;
      }
    }
  }
}
</style>
